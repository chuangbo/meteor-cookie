Tinytest.add("should return the cookie value for the given name.", function (test) {
  document.cookie = '_sea_test_1=1';
  document.cookie = '_sea_test_2';
  document.cookie = '_sea_test_3=';
  document.cookie = '_sea_test_4[t]=xx';

  test.equal(Cookie.get('_sea_test_1'), '1');
  test.equal(Cookie.get('_sea_test_2'), '');
  test.equal(Cookie.get('_sea_test_3'), '');
  test.equal(Cookie.get('_sea_test_4[t]'), 'xx');
});


Tinytest.add("should return undefined for non-existing name.", function (test) {
  test.isUndefined(Cookie.get('_sea_test_none'));
});


Tinytest.add("should throw error for invalid name.", function (test) {
  test.isUndefined(Cookie.get('_sea_test_none'));
  test.throws(function(){ Cookie.get(true); });
  test.throws(function(){ Cookie.get({}); });
  test.throws(function(){ Cookie.get(null); });
});


Tinytest.add("should set a cookie with a given name and value.", function (test) {
  Cookie.set('_sea_test_11', 'xx');
  test.equal(Cookie.get('_sea_test_11'), 'xx');

  Cookie.set('_sea_test_12', 'xx', { expires: -1 });
  test.isUndefined(Cookie.get('_sea_test_12'));

  Cookie.set('_sea_test_13', '2', {
      expires: new Date(2099, 1, 1),
      path: '/'
  });
  test.equal(Cookie.get('_sea_test_13'), '2');

  Cookie.remove('_sea_test_14');
  Cookie.set('_sea_test_14', '4', {
      domain: document.domain,
      path: '/',
      secure: true
  });
  test.isUndefined(Cookie.get('_sea_test_14'));
});


Tinytest.add("should remove a cookie from the machine.", function (test) {
  Cookie.set('_sea_test_21', 'xx');
  Cookie.remove('_sea_test_21');
  test.isUndefined(Cookie.get('_sea_test_21'));

  Cookie.set('_sea_test_22', 'xx', {
      expires: new Date(2099, 1, 1),
      path: '/'
  });
  Cookie.remove('_sea_test_22', {
      path: '/'
  });
  test.isUndefined(Cookie.get('_sea_test_22'));
});

