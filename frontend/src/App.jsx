import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import FormCreatePage from './pages/FormCreatePage';
import UserDashboard from './components/UserDashboard';
import BuySuccessPage from './pages/BuySuccess';
import ResetScroll from './components/ResetScroll';

// Imports lazy
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductListingPage = lazy(() => import('./pages/ProductListingPage'));
const ProductViewPage = lazy(() => import('./pages/ProductViewPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ShoppingCartPage = lazy(() => import('./pages/ShoppingCartPage'));
const Success = lazy(() => import('./pages/BuySuccess'));
const FinaleBuyPage = lazy(() => import('./pages/FinalizarCompraPage'));
const NotFoundPage = lazy(() => import('./pages/404'));
const AdminPage = lazy(() => import('./pages/AdminPage')); 

const App = () => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <ResetScroll />
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path='/produtos'
          element={
            <Layout>
              <ProductListingPage />
            </Layout>
          }
        />
        <Route
          path='/produtos/:id'
          element={
            <Layout>
              <ProductViewPage />
            </Layout>
          }
        />
        <Route
          path='/orders'
          element={
            <Layout>
              <UserDashboard />
            </Layout>
          }
        />
        <Route
          path='/login'
          element={
            <Layout>
              <LoginPage />
            </Layout>
          }
        />
        <Route
          path='/checkout'
          element={
            <Layout>
              <FinaleBuyPage />
            </Layout>
          }
        />
        <Route
          path='/success'
          element={
            <Layout>
              <Success/>
            </Layout>
          }
        />
        <Route
          path='/create-account' 
          element={
            <Layout>
              <FormCreatePage />
            </Layout>
          }
        />
        <Route
          path='/product-success'
          element={
            <Layout>
              <BuySuccessPage />
            </Layout>
          }
        />
        <Route
          path='/shopping-cart' 
          element={
            <Layout>
              <ShoppingCartPage />
            </Layout>
          }
        />

        {/* Rota Painel Admin */}
        <Route
          path='/admin/dashboard'
          element={
            <Layout>
              <AdminPage />
            </Layout>
          }
        />

        {/* Rota de fallback para 404 - deve ser a última rota */}
        <Route
          path='/*'
          element={
            <Layout>
              <NotFoundPage />
            </Layout>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default App;