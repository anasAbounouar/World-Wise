import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CitiesProvider } from './contexts/CitiesContext';

import { lazy, Suspense } from 'react';
const Pricing = lazy(() => import('./pages/Pricing'));
const Product = lazy(() => import('./pages/Product'));
const Homepage = lazy(() => import('./pages/Homepage'));
const Login = lazy(() => import('./pages/Login'));
const AppLayout = lazy(() => import('./pages/AppLayout'));
const CityList = lazy(() => import('./components/CityList'));
const CountryList = lazy(() => import('./components/CountryList'));
const Form = lazy(() => import('./components/Form'));
const City = lazy(() => import('./components/City'));
const ProtectedRoute = lazy(() => import('./pages/ProtectedRoute'));

import { AuthProvider } from './contexts/FakeAuthContext';
import SpinnerFullPage from './components/SpinnerFullPage';

function App() {
  return (
    <>
      <CitiesProvider>
        <AuthProvider>
          <BrowserRouter>
            {' '}
            <Suspense fallback={<SpinnerFullPage />}>
              <Routes>
                <Route index element={<Homepage />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="product" element={<Product />} />{' '}
                <Route path="login" element={<Login />} />
                <Route
                  path="app"
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route
                    index
                    element={<Navigate replace to="cities" />}
                  ></Route>
                  <Route path="cities" element={<CityList />} />
                  <Route path="cities/:id" element={<City />} />

                  <Route path="countries" element={<CountryList />} />
                  <Route path="form" element={<Form />} />
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </AuthProvider>
      </CitiesProvider>
    </>
  );
}

export default App;
