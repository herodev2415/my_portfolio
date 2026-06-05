# Documentation technique — Portfolio complet

Ce dossier contient une version statique prête à déployer sur Vercel ou Netlify. Les textes ont été rédigés à partir de l’analyse des ZIP fournis.

## Système RH Entreprise — Gestion complète des employés, congés et rôles

Application RH fullstack conçue pour centraliser les processus internes : employés, contrats, congés, présences, évaluations, tâches et utilisateurs. Le projet combine un frontend Vue.js structuré et une API Express/MySQL sécurisée par JWT.

### Technologies
- Vue.js
- Vue Router
- Stores Vue personnalisés
- Axios
- Tailwind CSS
- Chart.js
- Node.js
- Express.js
- MySQL
- mysql2
- JWT
- bcrypt / bcryptjs
- Multer
- Nodemailer
- dotenv
- CORS
- Vite
- Git/GitHub

### Fonctionnalités principales
- Authentification avec token JWT
- Redirection selon rôle : admin, chef ou employé
- Gestion CRUD des employés avec photo
- Gestion des congés avec validation et statuts
- Gestion des contrats
- Présences et suivi des statuts
- Évaluations de performance
- Tableau de bord et statistiques
- Historique des actions
- Réinitialisation de mot de passe par email
- Suggestions de remplaçants
- Gestion des tâches
- Protection des routes côté frontend

### Défis
- Structurer une application avec plusieurs rôles et plusieurs parcours utilisateur
- Protéger les endpoints sensibles sans bloquer les actions légitimes des employés
- Gérer les photos employés en upload ou base64
- Maintenir la cohérence entre employés, utilisateurs, chefs et départements
- Tracer les actions importantes dans un historique exploitable
- Transformer des champs complexes comme compétences et tâches en données stockables

### Solutions
- Mise en place de middlewares d’authentification JWT et d’autorisation par rôle
- Découpage backend en routes, contrôleurs, middlewares et utilitaires
- Utilisation de requêtes préparées MySQL pour limiter les injections SQL
- Stockage structuré des compétences/tâches en JSON côté base
- Gestion Multer pour les fichiers et conversion base64 si nécessaire
- Router Vue avec meta.roles et garde globale beforeEach
- Centralisation de l’état utilisateur dans un store
- Ajout d’un module historique pour conserver la trace des opérations

### Résumé recruteur
Projet très pertinent pour un recruteur fullstack : il montre la capacité à concevoir une application métier complète, gérer des rôles, sécuriser une API, connecter un frontend Vue.js à MySQL et transformer un besoin administratif réel en outil utilisable.

## Social Connect Platform — Réseau social moderne avec Supabase Realtime

Plateforme sociale fullstack construite avec React, TypeScript, Tailwind CSS et Supabase. Elle couvre les fonctions clés d’un réseau social : feed, profils, amis, messages, groupes, notifications, stories, médias et historique d’appels.

### Technologies
- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Supabase Auth
- Supabase PostgreSQL
- Supabase Storage
- Supabase Realtime
- RLS SQL
- Radix UI / composants type shadcn
- Lucide React
- React Hook Form
- Zod
- Sonner
- date-fns
- ESLint
- Vercel config

### Fonctionnalités principales
- Connexion et inscription
- RouteGuard pour pages protégées
- Feed avec posts et médias
- Création de publication
- Likes/réactions/commentaires
- Profils utilisateurs enrichis
- Demandes d’amis avec statuts
- Recherche utilisateurs
- Messages et conversations
- Upload média Supabase Storage
- Compression avatar côté frontend
- Notifications temps réel
- Groupes et détail de groupe
- Stories
- Historique d’appels audio/vidéo
- Politiques RLS Supabase

### Défis
- Synchroniser l’état utilisateur entre Supabase Auth, profils et routes protégées
- Éviter les erreurs d’affichage sur les profils et amitiés
- Gérer les notifications et les demandes d’amis sans doublons incohérents
- Mettre en place une base Supabase complète avec RLS
- Gérer l’upload média, les avatars et la compression image
- Découper un projet social volumineux en composants maintenables

### Solutions
- Utilisation d’un AuthContext et d’un RouteGuard
- Découpage en pages lazy-loaded pour réduire le coût initial
- Schéma SQL complet avec tables profiles, posts, comments, likes, friendships, messages, notifications, groups et calls
- Politiques RLS pour sécuriser les accès aux données
- Upsert de profil et stockage dans un bucket media
- Toasts pour informer clairement l’utilisateur
- Fonctions de rafraîchissement ciblées sur les posts/profils pour éviter de recharger toute l’application

### Résumé recruteur
Projet très différenciant : il montre une compréhension des applications modernes orientées produit, avec TypeScript, Supabase, temps réel, sécurité base de données et expérience utilisateur riche.

## GarageApp — Application desktop de gestion de clients, véhicules et réparations

Application Java Swing connectée à SQLite pour gérer l’activité d’un garage : clients, véhicules, réparations, coûts, statuts et historique. Le projet démontre la capacité à concevoir une application métier desktop avec base de données locale.

### Technologies
- Java
- Java Swing
- JDBC
- SQLite
- JTable
- DefaultTableModel
- PreparedStatement
- Architecture par panels
- SQL
- Git/GitHub

### Fonctionnalités principales
- Gestion des clients
- Gestion des véhicules
- Association véhicule/propriétaire
- Gestion des réparations
- Statuts : en cours, terminé, en retard
- Filtrage par statut
- Affichage des coûts en Ariary
- Historique et recherche
- Interface à onglets
- Boutons stylés avec effets hover
- Connexion SQLite via JDBC

### Défis
- Créer une interface desktop organisée sans framework web
- Connecter Java à une base SQLite locale
- Synchroniser tables clients, véhicules et réparations
- Mettre à jour les JTable après chaque opération
- Calculer un statut affiché à partir des dates et du statut réel
- Éviter les erreurs SQL grâce aux PreparedStatement

### Solutions
- Découpage de l’interface en panels spécialisés
- Utilisation d’un MainFrame avec JTabbedPane
- Connexion centralisée dans DBConnection
- Requêtes SQL préparées pour insert/update/delete
- refreshTable après modification des données
- TableRowSorter pour le tri des véhicules
- Calcul du statut en retard selon la date de sortie

### Résumé recruteur
Ce projet prouve que le développeur ne se limite pas au web : il sait construire une application métier desktop, manipuler une base relationnelle locale et structurer une interface exploitable pour un utilisateur non technique.

## Calculatrice Scientifique — Interface web inspirée CASIO avec fonctions avancées

Calculatrice scientifique en HTML, CSS et JavaScript vanilla, avec fonctions trigonométriques, modes DEG/RAD/GRAD, SHIFT, historique, clavier physique et notation scientifique.

### Technologies
- HTML5
- CSS3
- JavaScript vanilla
- DOM API
- CSS Grid
- Math API JavaScript
- Événements clavier
- Responsive design

### Fonctionnalités principales
- Interface type calculatrice scientifique
- Fonctions sin, cos, tan
- Fonctions inverses via SHIFT
- Fonctions hyperboliques
- Factorielle
- Pourcentage
- Puissances et racines
- Mode DEG/RAD/GRAD
- Constante π et e
- Random
- ANS / dernier résultat
- Historique d’expression
- Gestion clavier physique
- DEL et AC
- Notation ingénieur

### Défis
- Traduire des symboles mathématiques lisibles en expressions calculables
- Gérer les fonctions inverses sans conflit de remplacement
- Adapter les calculs trigonométriques aux modes DEG/RAD/GRAD
- Maintenir les parenthèses automatiquement
- Gérer les erreurs sans casser l’interface
- Permettre le clavier physique en plus des boutons

### Solutions
- Objet calc centralisant état et méthodes
- Placeholders temporaires pour les fonctions trigonométriques
- Remplacement progressif des symboles vers Math.*
- Auto-fermeture des parenthèses ouvertes
- Formatage exponentiel des résultats trop longs
- Écouteur keydown pour mapper les touches clavier
- Séparation HTML/CSS avec style dédié

### Résumé recruteur
Projet intéressant pour évaluer la maîtrise JavaScript pure : il montre la capacité à manipuler le DOM, gérer un état applicatif, traduire une interface complexe en logique fonctionnelle et produire une UI soignée sans dépendance lourde.

## Portfolio Fullstack — Vitrine professionnelle orientée recrutement et freelance

Refonte du portfolio personnel pour présenter un profil développeur Fullstack de façon claire, crédible et orientée conversion : projets, compétences, preuves techniques, contact.

### Technologies
- HTML5
- CSS3
- JavaScript
- Vue.js dans la version existante
- Vite
- Tailwind CSS dans la version existante
- Lucide icons dans la version existante
- Structure claire
- JSON-LD
- Responsive design
- Git/GitHub

### Fonctionnalités principales
- Hero professionnel
- Positionnement Fullstack clair
- Cartes projets détaillées
- Filtres par type de projet
- Section compétences
- Preuves techniques par projet
- CTA recruteur/freelance
- Contact email/GitHub/LinkedIn
- Design clair et responsive
- Structure déployable Vercel/Netlify

### Défis
- Clarifier le positionnement sans disperser le profil
- Éviter les textes génériques de portfolio
- Présenter les projets avec une vraie narration technique
- Rendre le site léger et déployable sans configuration lourde
- Conserver une image professionnelle sur mobile

### Solutions
- Nouvelle structure statique claire et légère
- Descriptions projet basées sur le code réellement inspecté
- Palette claire avec bleu/teal professionnel
- Cards avec ombres définies
- Pages dédiées par projet
- Documentation détaillée jointe
- Structure HTML simple et lisible

### Résumé recruteur
Cette refonte positionne le développeur comme un profil capable de livrer des applications complètes, pas seulement des interfaces. Elle transforme les projets en preuves concrètes de compétence technique et de maturité produit.

## Marketplace Petites Annonces — Publication, recherche et gestion d’annonces

Application fullstack React/Express/MySQL permettant de publier, rechercher, consulter et gérer des annonces avec authentification JWT et upload d’images.

### Technologies
- React
- Vite
- React Router
- Axios
- React Icons
- React Modal
- Node.js
- Express.js
- MySQL
- mysql2
- JWT
- bcrypt / bcryptjs
- Multer
- CORS
- dotenv
- Nodemon
- Git/GitHub

### Fonctionnalités principales
- Connexion/inscription
- Routes frontend protégées
- Accueil annonces
- Recherche par titre, description ou localisation
- Filtre par catégorie
- Détail d’annonce en modal ou page dédiée
- Upload multi-images jusqu’à 5 fichiers
- Publication d’annonce
- Gestion de mes annonces
- Profil utilisateur
- Intercepteur Axios pour token
- Backend statique /uploads pour images

### Défis
- Gérer l’upload multi-images avec Express/Multer
- Protéger les actions de publication/modification/suppression
- Relier annonces et utilisateurs
- Synchroniser localStorage, token et requêtes Axios
- Créer une recherche utile sans backend complexe
- Servir les images uploadées depuis le backend

### Solutions
- Multer upload.array pour limiter les images
- Middleware authenticateToken sur routes sensibles
- Axios interceptor pour ajouter Authorization automatiquement
- Routes séparées auth, ads et users
- Stockage des fichiers dans /uploads exposé statiquement
- Filtrage côté frontend sur titre, description, localisation et catégorie

### Résumé recruteur
Projet très parlant pour des missions web : il couvre un cycle complet utilisateur, une API REST, l’authentification, l’upload de fichiers et une interface orientée conversion.

