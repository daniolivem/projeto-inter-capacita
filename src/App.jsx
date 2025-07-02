import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import FormCreatePage from './pages/FormCreatePage';
import UserDashboard from './components/UserDashboard';
import BuySuccessPage from './pages/BuySuccess';
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductListingPage = lazy(() => import('./pages/ProductListingPage'));
const ProductViewPage = lazy(() => import('./pages/ProductViewPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const CreateAccountInitialPage = lazy(
  () => import('./pages/CreateAccountInitialPage')
);
// Adicione a importação da nova página do carrinho
const ShoppingCartPage = lazy(() => import('./pages/ShoppingCartPage')); // Nova linha

const App = () => {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
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
          path='/categorias'
          element={
            <Layout>
              <div>Categoria</div>
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
        {/* <Route
          path='/profile'
          element={
            <Layout>
              <UserDashboard />
            </Layout>
          }
        /> */}
        <Route
          path='/login'
          element={
            <Layout>
              <LoginPage />
            </Layout>
          }
        />
        <Route
          path='/register'
          element={
            <Layout>
              <CreateAccountInitialPage />
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
        {/* Nova rota para o carrinho */}
        <Route
          path='/shopping-cart' // Changed from '/cart'
          element={
            <Layout>
              <ShoppingCartPage />
            </Layout>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default App;
