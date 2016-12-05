﻿(function () {
    angular.module('app').factory('appSession', [
            function () {

                var _session = {
                    user: null,
                    tenant: null,
                    isLoggedIn:false
                };

                abp.services.app.session.getCurrentLoginInformations({ async: false }).done(function (result) {
                    console.log(result);
                    if (result.isLoggedIn) {
                        _session.user = result.user;
                        _session.tenant = result.tenant;
                        _session.isLoggedIn = true;
                    }
                });

                return _session;
            }
        ]);
})();