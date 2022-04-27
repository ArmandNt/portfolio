import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet-async";
import { lazy, StrictMode } from "react";
import Layout from "./pages/Layout";
import "./App.css";

const Accueil = lazy(() => import("./pages/Accueil"));
const ProjetWeb = lazy(() => import("./pages/ProjetWeb"));
const ProjetAppBureau = lazy(() => import("./pages/ProjetBureau"));
const Contact = lazy(() => import("./pages/Contact"));

export default function App() {
  return <StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={
              <div>
                <Helmet>
                  <meta name="description" content="Page d'accueil avec photo." />
                  <title>Page d'Accueil</title>
                </Helmet>
                <Accueil />
              </div>
            } />
            <Route path="ProjetWeb" element={
              <div>
                <Helmet>
                  <meta name="description" content="Un projet de site web web d'un restaurant code en HTML/CSS, JS et base de donnee MySQL." />
                  <title>Projet Web - Resto fastfood</title>
                </Helmet>
                <ProjetWeb />
              </div>
            } />
            <Route path="ProjetBureau" element={
              <div>
                <Helmet>
                  <meta name="description" content="Un projet d'application bureau code en C# avec une base de donnée SQL Server." />
                  <title>Projet Bureau - Gestions stagiaires</title>
                </Helmet>
                <ProjetAppBureau />
              </div>
            } />
            <Route path="Contact" element={
              <div>
                <Helmet>
                  <meta name="description" content="Un formulaire pour me contacter." />
                  <title>Contactez-Moi</title>
                </Helmet>
                <Contact />
              </div>
            } />
          </Route>
        </Routes>
      </HelmetProvider>
    </BrowserRouter>
    </StrictMode>;
}
