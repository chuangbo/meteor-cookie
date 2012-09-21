Package.describe({
  summary: "Simple cookies for browser."
});

Package.on_use(function (api) {
  api.add_files('cookie.js', 'client');
});
