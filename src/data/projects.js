export const projects = [
  {
    slug: 'projet-rh',
    folder: 'projet-rh',

    title: 'SIRH',
    fullTitle: 'Système RH Entreprise — Gestion complète des employés, congés et rôles',
    type: 'Application RH',
    badge: 'Fullstack RH',
    level: 'Projet avancé',
    category: 'Gestion RH',
    complexity: 'Fullstack métier',

    image: '/assets/screenshots/projet-rh-cover.jpg',
    cover: '/assets/screenshots/projet-rh-cover.jpg',
    images: ['/assets/screenshots/projet-rh-cover.jpg'],

    short:
      'Application RH fullstack pour gérer les employés, congés, contrats, présences, rôles et statistiques.',

    context:
      'Ce projet centralise les processus RH d’une entreprise : employés, contrats, congés, présences, évaluations, tâches et utilisateurs.',

    problem:
      'Le problème principal est la perte de visibilité sur les informations RH : congés, contrats, présences, évaluations et actions utilisateurs.',

    value:
      'L’utilisateur gagne du temps, réduit les saisies manuelles et suit les dossiers employés avec plus de clarté.',

    highlight:
      'Une application métier complète avec rôles, API REST, MySQL, tableaux de bord et gestion RH structurée.',

    tech: [
      'Vue.js',
      'Vue Router',
      'Axios',
      'Tailwind CSS',
      'Chart.js',
      'Node.js',
      'Express.js',
      'MySQL',
      'JWT',
      'bcrypt',
      'Multer',
      'Nodemailer',
      'Vite',
      'Git/GitHub'
    ],

    features: [
      'Authentification JWT',
      'Redirection selon rôle',
      'Gestion CRUD des employés',
      'Gestion des congés',
      'Gestion des contrats',
      'Présences et statuts',
      'Évaluations de performance',
      'Dashboard et statistiques',
      'Historique des actions',
      'Réinitialisation mot de passe',
      'Gestion des tâches',
      'Routes protégées'
    ],

    modules_visible: [
      'Login',
      'Dashboard RH',
      'Employés',
      'Congés',
      'Contrats',
      'Présences',
      'Évaluations',
      'Utilisateurs',
      'Profil employé',
      'Demande de congé',
      'Cartes statistiques',
      'Graphiques'
    ],

    ux: [
      'Interface métier productive',
      'Cartes et tableaux lisibles',
      'Parcours séparés admin, chef et employé',
      'Formulaires clairs',
      'Navigation protégée par rôle'
    ],

    challenges: [
      'Gérer plusieurs rôles utilisateur',
      'Sécuriser les endpoints sensibles',
      'Gérer les photos employés',
      'Relier employés, utilisateurs et départements',
      'Tracer les actions importantes'
    ],

    solutions: [
      'Middlewares JWT et autorisation par rôle',
      'Backend structuré en routes et contrôleurs',
      'Requêtes préparées MySQL',
      'Router Vue avec meta.roles',
      'Store utilisateur centralisé',
      'Module historique'
    ],

    skills: [
      'Architecture fullstack',
      'Gestion des rôles',
      'API REST sécurisée',
      'Connexion Vue.js, Express et MySQL',
      'UX d’application métier'
    ],

    practices: [
      'Architecture MVC',
      'Routes protégées',
      'Validation des champs',
      'Hashage mot de passe',
      'Variables d’environnement',
      'Composants réutilisables'
    ],

    future: [
      'Notifications internes',
      'Tests unitaires',
      'Pagination serveur',
      'Exports PDF/Excel',
      'Déploiement Docker',
      'Accessibilité améliorée'
    ],

    recruiter:
      'Projet pertinent pour un profil fullstack : il montre la capacité à concevoir une application métier complète, gérer des rôles, sécuriser une API et connecter Vue.js à MySQL.',

    sources:
      'Code inspecté : backend Express/MySQL, contrôleurs employés/congés/présences/utilisateurs, router Vue, vues Dashboard/Login/Employé.'
  },

  {
    slug: 'reseau-social',
    folder: 'reseau-social',

    title: 'Réseau social',
    fullTitle: 'Social Connect Platform — Réseau social moderne avec Supabase Realtime',
    type: 'Application sociale',
    badge: 'Fullstack social app',
    level: 'Projet avancé',
    category: 'Réseau social',
    complexity: 'Realtime & UX sociale',

    image: '/assets/screenshots/reseau-social-cover.jpg',
    cover: '/assets/screenshots/reseau-social-cover.jpg',
    images: ['/assets/screenshots/reseau-social-cover.jpg'],

    short:
      'Plateforme sociale moderne avec feed, profils, amis, messages, groupes, notifications et médias.',

    context:
      'Le projet reproduit les bases d’une application sociale moderne avec authentification, base PostgreSQL, stockage média et temps réel.',

    problem:
      'Un réseau social demande de synchroniser utilisateurs, publications, réactions, commentaires, messages, notifications et groupes.',

    value:
      'L’utilisateur peut publier, commenter, aimer, rechercher des profils, ajouter des amis, envoyer des messages et recevoir des notifications.',

    highlight:
      'Une application sociale complète avec feed, profils, messagerie, notifications et logique temps réel.',

    tech: [
      'React 18',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'React Router',
      'Supabase Auth',
      'Supabase PostgreSQL',
      'Supabase Storage',
      'Supabase Realtime',
      'RLS SQL',
      'Radix UI',
      'Lucide React',
      'React Hook Form',
      'Zod'
    ],

    features: [
      'Connexion et inscription',
      'Pages protégées',
      'Feed avec posts',
      'Création de publication',
      'Likes et commentaires',
      'Profils utilisateurs',
      'Demandes d’amis',
      'Recherche utilisateurs',
      'Messages',
      'Upload média',
      'Notifications temps réel',
      'Groupes',
      'Stories',
      'Historique d’appels',
      'RLS Supabase'
    ],

    modules_visible: [
      'LoginPage',
      'RegisterPage',
      'FeedPage',
      'ProfilePage',
      'FriendsPage',
      'MessagesPage',
      'NotificationsPage',
      'SearchPage',
      'SettingsPage',
      'GroupsPage',
      'Navbar responsive',
      'PostCard',
      'CommentSection',
      'CreatePostForm'
    ],

    ux: [
      'Layout type réseau social',
      'Navigation persistante',
      'Cartes de posts structurées',
      'Feedback utilisateur avec toast',
      'Profil utilisateur riche',
      'Composants UI cohérents'
    ],

    challenges: [
      'Synchroniser l’état utilisateur',
      'Gérer profils et amitiés',
      'Éviter les notifications incohérentes',
      'Mettre en place Supabase avec RLS',
      'Gérer les médias',
      'Découper un projet volumineux'
    ],

    solutions: [
      'AuthContext et RouteGuard',
      'Pages lazy-loaded',
      'Schéma SQL complet',
      'Politiques RLS',
      'Bucket média Supabase',
      'Toasts utilisateur',
      'Rafraîchissement ciblé des données'
    ],

    skills: [
      'React avec TypeScript',
      'Architecture frontend modulaire',
      'Sécurité Supabase',
      'Gestion de session',
      'Temps réel',
      'UX sociale'
    ],

    practices: [
      'TypeScript',
      'Routes protégées',
      'Lazy loading',
      'Composants réutilisables',
      'Validation des formulaires',
      'Gestion des erreurs',
      'Stockage média'
    ],

    future: [
      'Pagination infinie',
      'Modération de contenu',
      'Appels/WebRTC',
      'Tests E2E',
      'Optimisation Supabase',
      'Mode hors-ligne',
      'Paramètres de confidentialité'
    ],

    recruiter:
      'Projet différenciant : il montre une compréhension des applications modernes orientées produit, avec TypeScript, Supabase, temps réel et expérience utilisateur riche.',

    sources:
      'Code inspecté : README, routes React, pages Feed/Profile/Messages/Notifications/Settings, schéma Supabase et RLS.'
  },

  {
    slug: 'garageapp',
    folder: 'garageapp',

    title: 'Garage App',
    fullTitle: 'GarageApp — Application desktop de gestion de clients, véhicules et réparations',
    type: 'Gestion garage',
    badge: 'Desktop métier',
    level: 'Projet intermédiaire+',
    category: 'Application desktop',
    complexity: 'Desktop Java/SQLite',

    image: '/assets/screenshots/garageapp-cover.jpg',
    cover: '/assets/screenshots/garageapp-cover.jpg',
    images: ['/assets/screenshots/garageapp-cover.jpg'],

    short:
      'Application Java Swing pour gérer clients, véhicules, réparations, coûts, statuts et historique.',

    context:
      'GarageApp répond à un cas métier concret : suivre les clients, véhicules confiés, réparations en cours et historique d’un garage.',

    problem:
      'Sans outil dédié, un garage peut perdre le lien entre client, véhicule, réparation, statut et coût.',

    value:
      'L’utilisateur gagne du temps dans l’ajout, la consultation, la modification et le suivi des réparations.',

    highlight:
      'Une application desktop métier avec interface tabulaire, base SQLite et gestion claire des réparations.',

    tech: [
      'Java',
      'Java Swing',
      'JDBC',
      'SQLite',
      'JTable',
      'DefaultTableModel',
      'PreparedStatement',
      'SQL',
      'Git/GitHub'
    ],

    features: [
      'Gestion des clients',
      'Gestion des véhicules',
      'Association véhicule/propriétaire',
      'Gestion des réparations',
      'Statuts de réparation',
      'Filtrage par statut',
      'Coûts en Ariary',
      'Historique et recherche',
      'Interface à onglets',
      'Connexion SQLite'
    ],

    modules_visible: [
      'Gestion Clients / Véhicules',
      'Réparations',
      'Recherche / Historique',
      'Tableaux JTable',
      'Formulaires JOptionPane',
      'Boutons Ajouter/Modifier/Supprimer'
    ],

    ux: [
      'Interface desktop simple',
      'Onglets métier clairs',
      'Tables lisibles',
      'Boutons différenciés',
      'Retour utilisateur via boîtes de dialogue'
    ],

    challenges: [
      'Créer une interface desktop organisée',
      'Connecter Java à SQLite',
      'Synchroniser clients, véhicules et réparations',
      'Mettre à jour les tableaux',
      'Éviter les erreurs SQL'
    ],

    solutions: [
      'Interface découpée en panels',
      'MainFrame avec JTabbedPane',
      'Connexion centralisée',
      'Requêtes SQL préparées',
      'refreshTable après modification',
      'Calcul du statut'
    ],

    skills: [
      'POO Java',
      'Interfaces Swing',
      'JDBC/SQLite',
      'CRUD desktop',
      'Gestion d’événements UI',
      'Affichage de données métier'
    ],

    practices: [
      'Séparation gui/model/util',
      'PreparedStatement',
      'Connexion centralisée',
      'Gestion des exceptions SQL',
      'Modèle métier clair'
    ],

    future: [
      'Configuration SQLite portable',
      'Facturation PDF',
      'Recherche multicritère',
      'Validation de saisie',
      'Installateur Windows',
      'Migration JavaFX'
    ],

    recruiter:
      'Ce projet montre la capacité à construire une application métier desktop, manipuler une base locale et structurer une interface exploitable.',

    sources:
      'Code inspecté : MainFrame, PanelClients, PanelVehicules, PanelReparations, DBConnection et modèles Java.'
  },

  {
    slug: 'calculatrice',
    folder: 'calculatrice',

    title: 'Calculatrice',
    fullTitle: 'Calculatrice Scientifique — Interface web inspirée CASIO avec fonctions avancées',
    type: 'Interface web',
    badge: 'Frontend vanilla',
    level: 'Projet frontend solide',
    category: 'JavaScript avancé',
    complexity: 'Logique algorithmique',

    image: '/assets/screenshots/calculatrice-cover.jpg',
    cover: '/assets/screenshots/calculatrice-cover.jpg',
    images: ['/assets/screenshots/calculatrice-cover.jpg'],

    short:
      'Calculatrice scientifique responsive avec fonctions avancées, modes d’angle, clavier et historique.',

    context:
      'Le projet transforme une interface simple de calculatrice en mini-application web interactive sans framework.',

    problem:
      'Une calculatrice scientifique doit gérer fonctions trigonométriques, puissances, parenthèses, modes d’angle, historique et erreurs.',

    value:
      'L’utilisateur peut faire des calculs avancés rapidement dans une interface web légère et compréhensible.',

    highlight:
      'Un projet JavaScript pur qui montre la logique, l’interaction utilisateur et le design responsive.',

    tech: [
      'HTML5',
      'CSS3',
      'JavaScript vanilla',
      'DOM API',
      'CSS Grid',
      'Math API JavaScript',
      'Événements clavier',
      'Responsive design'
    ],

    features: [
      'Interface type calculatrice scientifique',
      'Fonctions sin, cos, tan',
      'Fonctions inverses via SHIFT',
      'Fonctions hyperboliques',
      'Factorielle',
      'Pourcentage',
      'Puissances et racines',
      'Mode DEG/RAD/GRAD',
      'Constante π et e',
      'ANS',
      'Historique',
      'Gestion clavier',
      'DEL et AC',
      'Notation ingénieur'
    ],

    modules_visible: [
      'Écran résultat',
      'Historique',
      'Indicateur DEG/RAD/GRAD',
      'Indicateur SHIFT',
      'Grille de boutons',
      'Touches numériques',
      'Touches opérateurs'
    ],

    ux: [
      'Look réaliste',
      'Boutons hiérarchisés',
      'État SHIFT visible',
      'Écran contrasté',
      'Feedback tactile',
      'Grille compacte'
    ],

    challenges: [
      'Traduire les symboles mathématiques',
      'Gérer les fonctions inverses',
      'Adapter les modes DEG/RAD/GRAD',
      'Maintenir les parenthèses',
      'Gérer les erreurs',
      'Supporter le clavier'
    ],

    solutions: [
      'Objet calc centralisé',
      'Placeholders trigonométriques',
      'Remplacement vers Math.*',
      'Auto-fermeture des parenthèses',
      'Formatage exponentiel',
      'Écouteur keydown'
    ],

    skills: [
      'JavaScript DOM',
      'Gestion d’état côté client',
      'Interface interactive',
      'Logique mathématique',
      'Gestion clavier/souris',
      'CSS Grid'
    ],

    practices: [
      'Structure simple',
      'Fonctions regroupées',
      'try/catch',
      'Classes CSS cohérentes',
      'UI responsive'
    ],

    future: [
      'Parser mathématique sécurisé',
      'Mémoire M+/M-/MR',
      'Historique localStorage',
      'Tests unitaires',
      'Mode sombre/clair',
      'Accessibilité ARIA',
      'PWA offline'
    ],

    recruiter:
      'Projet utile pour évaluer la maîtrise JavaScript pure : manipulation DOM, gestion d’état, logique fonctionnelle et UI soignée.',

    sources:
      'Code inspecté : index.html, style.css, objet calc, gestion des fonctions scientifiques et du clavier.'
  },

  {
    slug: 'portfolio',
    folder: 'portfolio',

    title: 'Portfolio',
    fullTitle: 'Portfolio Fullstack — Vitrine professionnelle orientée recrutement et freelance',
    type: 'Portfolio web',
    badge: 'Personal branding tech',
    level: 'Projet vitrine professionnel',
    category: 'Frontend & personal branding',
    complexity: 'UI & responsive design',

    image: '/assets/screenshots/cv-interactif.png',
    cover: '/assets/screenshots/cv-interactif.png',
    images: ['/assets/screenshots/cv-interactif.png'],

    short:
      'Portfolio professionnel pour présenter profil, compétences, projets, preuves techniques et contact.',

    context:
      'La refonte transforme un portfolio classique en vitrine claire pour recruteurs, clients et opportunités freelance.',

    problem:
      'Un portfolio peut être joli mais inefficace s’il ne montre pas clairement la valeur, les projets et les compétences.',

    value:
      'Le recruteur ou client comprend rapidement le positionnement fullstack, les technologies maîtrisées et les projets réalisés.',

    highlight:
      'Un portfolio clair, responsive et orienté conversion pour présenter un profil développeur de manière professionnelle.',

    tech: [
      'Vue.js',
      'Vite',
      'HTML5',
      'CSS3',
      'JavaScript',
      'Responsive design',
      'Git/GitHub',
      'Netlify'
    ],

    features: [
      'Hero professionnel',
      'Positionnement Fullstack clair',
      'Cartes projets',
      'Section compétences',
      'Contact direct',
      'Design responsive',
      'Navigation sticky',
      'Footer professionnel'
    ],

    modules_visible: [
      'Navbar',
      'Hero',
      'Projets',
      'Compétences',
      'Contact',
      'Footer',
      'Cartes projet'
    ],

    ux: [
      'Design sobre et crédible',
      'Hiérarchie visuelle claire',
      'Sections courtes',
      'Navigation fluide',
      'Lecture rapide',
      'Responsive mobile'
    ],

    challenges: [
      'Clarifier le positionnement',
      'Éviter les textes génériques',
      'Présenter les projets rapidement',
      'Garder le site léger',
      'Conserver une image professionnelle sur mobile'
    ],

    solutions: [
      'Structure simple',
      'Descriptions projet plus claires',
      'Cartes visuelles',
      'Contact direct',
      'Thème sombre premium',
      'Optimisation responsive'
    ],

    skills: [
      'UX de portfolio',
      'Clarté du contenu',
      'Design responsive',
      'Structuration site vitrine',
      'Valorisation de projets'
    ],

    practices: [
      'HTML sémantique',
      'CSS variables',
      'Navigation accessible',
      'Images optimisées',
      'Structure claire',
      'Déploiement statique'
    ],

    future: [
      'Version anglaise',
      'Blog technique court',
      'CV PDF téléchargeable',
      'Analytics privacy-friendly',
      'Formulaire serverless',
      'Scores Lighthouse'
    ],

    recruiter:
      'Cette refonte montre une capacité à présenter un profil technique de façon claire, crédible et orientée opportunités.',

    sources:
      'Code inspecté : portfolio Vue existant, Hero, compétences, réalisations, données projets et styles.'
  },

  {
    slug: 'petites-annonces',
    folder: 'petites-annonces',

    title: 'Petites annonces',
    fullTitle: 'Marketplace Petites Annonces — Publication, recherche et gestion d’annonces',
    type: 'Application annonces',
    badge: 'Marketplace fullstack',
    level: 'Projet fullstack',
    category: 'Marketplace',
    complexity: 'CRUD & parcours utilisateur',

    image: '/assets/screenshots/petites-annonces.png',
    cover: '/assets/screenshots/petites-annonces.png',
    images: ['/assets/screenshots/petites-annonces.png'],

    short:
      'Application fullstack pour publier, rechercher, consulter et gérer des petites annonces avec images.',

    context:
      'Le projet répond à un besoin de plateforme locale de petites annonces avec comptes utilisateurs, images, recherche et catégories.',

    problem:
      'La difficulté est d’orchestrer l’authentification, les images, les droits utilisateur et l’expérience de recherche.',

    value:
      'L’utilisateur peut publier rapidement une annonce, visualiser les images, filtrer les contenus et gérer ses propres annonces.',

    highlight:
      'Une marketplace simple et complète avec authentification, upload images, recherche et gestion des annonces.',

    tech: [
      'React',
      'Vite',
      'React Router',
      'Axios',
      'React Icons',
      'Node.js',
      'Express.js',
      'MySQL',
      'JWT',
      'bcrypt',
      'Multer',
      'CORS',
      'dotenv',
      'Git/GitHub'
    ],

    features: [
      'Connexion et inscription',
      'Routes protégées',
      'Accueil annonces',
      'Recherche par titre, description ou localisation',
      'Filtre par catégorie',
      'Détail d’annonce',
      'Upload multi-images',
      'Publication d’annonce',
      'Gestion de mes annonces',
      'Profil utilisateur',
      'Token via Axios',
      'Backend /uploads pour images'
    ],

    modules_visible: [
      'LoginRegister',
      'HomeAds',
      'AdsList',
      'AdDetails',
      'Publish',
      'MyAds',
      'Profile',
      'Navbar',
      'API Axios'
    ],

    ux: [
      'Grille d’annonces avec cards',
      'Recherche et filtre groupés',
      'Badges utilisateur',
      'Détail lisible',
      'Prévisualisation images',
      'Navigation selon connexion'
    ],

    challenges: [
      'Gérer l’upload multi-images',
      'Protéger les actions sensibles',
      'Relier annonces et utilisateurs',
      'Synchroniser token et requêtes Axios',
      'Créer une recherche utile',
      'Servir les images uploadées'
    ],

    solutions: [
      'Multer upload.array',
      'Middleware authenticateToken',
      'Axios interceptor',
      'Routes auth, ads et users',
      'Dossier uploads exposé statiquement',
      'Filtrage côté frontend'
    ],

    skills: [
      'Marketplace fullstack',
      'Auth JWT',
      'Upload images',
      'CRUD sécurisé',
      'API REST',
      'Cards produit',
      'Workflow de publication'
    ],

    practices: [
      'Séparation frontend/backend',
      'Routes protégées',
      'Hashage mot de passe',
      'JWT',
      'FormData',
      'Composants séparés',
      'Variables d’environnement'
    ],

    future: [
      'Pagination serveur',
      'Recherche SQL avancée',
      'Compression images',
      'Messagerie vendeur/acheteur',
      'Modération annonces',
      'Favoris',
      'Déploiement cloud'
    ],

    recruiter:
      'Projet parlant pour des missions web : il couvre un cycle complet utilisateur, une API REST, l’authentification, l’upload et une interface orientée conversion.',

    sources:
      'Code inspecté : backend Express routes ads/auth/users, frontend React App, HomeAds, Publish et API Axios.'
  }
]

export const featuredProjects = projects.slice(0, 3)