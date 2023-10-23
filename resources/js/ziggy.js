const Ziggy = {
    url: "http://localhost",
    port: null,
    defaults: {},
    routes: {
        "passport.token": { uri: "oauth/token", methods: ["POST"] },
        "passport.authorizations.authorize": {
            uri: "oauth/authorize",
            methods: ["GET", "HEAD"],
        },
        "passport.token.refresh": {
            uri: "oauth/token/refresh",
            methods: ["POST"],
        },
        "passport.authorizations.approve": {
            uri: "oauth/authorize",
            methods: ["POST"],
        },
        "passport.authorizations.deny": {
            uri: "oauth/authorize",
            methods: ["DELETE"],
        },
        "passport.tokens.index": {
            uri: "oauth/tokens",
            methods: ["GET", "HEAD"],
        },
        "passport.tokens.destroy": {
            uri: "oauth/tokens/{token_id}",
            methods: ["DELETE"],
        },
        "passport.clients.index": {
            uri: "oauth/clients",
            methods: ["GET", "HEAD"],
        },
        "passport.clients.store": { uri: "oauth/clients", methods: ["POST"] },
        "passport.clients.update": {
            uri: "oauth/clients/{client_id}",
            methods: ["PUT"],
        },
        "passport.clients.destroy": {
            uri: "oauth/clients/{client_id}",
            methods: ["DELETE"],
        },
        "passport.scopes.index": {
            uri: "oauth/scopes",
            methods: ["GET", "HEAD"],
        },
        "passport.personal.tokens.index": {
            uri: "oauth/personal-access-tokens",
            methods: ["GET", "HEAD"],
        },
        "passport.personal.tokens.store": {
            uri: "oauth/personal-access-tokens",
            methods: ["POST"],
        },
        "passport.personal.tokens.destroy": {
            uri: "oauth/personal-access-tokens/{token_id}",
            methods: ["DELETE"],
        },
        "sanctum.csrf-cookie": {
            uri: "sanctum/csrf-cookie",
            methods: ["GET", "HEAD"],
        },
        "ignition.healthCheck": {
            uri: "_ignition/health-check",
            methods: ["GET", "HEAD"],
        },
        "ignition.executeSolution": {
            uri: "_ignition/execute-solution",
            methods: ["POST"],
        },
        "ignition.updateConfig": {
            uri: "_ignition/update-config",
            methods: ["POST"],
        },
        dashboard: { uri: "dashboard", methods: ["GET", "HEAD"] },
        "profile.edit": { uri: "profile", methods: ["GET", "HEAD"] },
        "profile.update": { uri: "profile", methods: ["PATCH"] },
        "profile.destroy": { uri: "profile", methods: ["DELETE"] },
        register: { uri: "register", methods: ["GET", "HEAD"] },
        login: { uri: "login", methods: ["GET", "HEAD"] },
        "password.request": {
            uri: "forgot-password",
            methods: ["GET", "HEAD"],
        },
        "password.email": { uri: "forgot-password", methods: ["POST"] },
        "password.reset": {
            uri: "reset-password/{token}",
            methods: ["GET", "HEAD"],
        },
        "password.store": { uri: "reset-password", methods: ["POST"] },
        "verification.notice": {
            uri: "verify-email",
            methods: ["GET", "HEAD"],
        },
        "verification.verify": {
            uri: "verify-email/{id}/{hash}",
            methods: ["GET", "HEAD"],
        },
        "verification.send": {
            uri: "email/verification-notification",
            methods: ["POST"],
        },
        "password.confirm": {
            uri: "confirm-password",
            methods: ["GET", "HEAD"],
        },
        "password.update": { uri: "password", methods: ["PUT"] },
        logout: { uri: "logout", methods: ["POST"] },
    },
};

if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
