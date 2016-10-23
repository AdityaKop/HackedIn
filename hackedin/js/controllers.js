// TIP: Access Route Parameters for your page via $stateParams.parameterName

angular.module('app.controllers', ['ionic', 'ngCordova'])
  
.controller('connectCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


}])
   
.controller('conversationCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


}])
   
.controller('profileCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


}])
      
.controller('menuCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', '$rootScope', 'Backand', 'LoginService', function ($scope, $stateParams, $rootScope, Backand, LoginService) {
    var login = this;

    function signin() {
        LoginService.signin(login.email, login.password)
            .then(function () {
                onLogin();
            }, function (error) {
               console.log(error)
            })
    }
    
    function onLogin(){
        $rootScope.$broadcast('authorized');
        login.email = '';
        login.password = '';            
        $state.go('tab.dashboard'); // CHANGE LATER
    }

    function signout() {
        LoginService.signout()
            .then(function () {
                // $state.go('tab.login');
                login.email = '';
                login.password = '';
                $rootScope.$broadcast('logout');
                $state.go($state.current, {}, {reload: true});
            })
     }

     login.signin = signin;
     login.signout = signout;

}])
   
.controller('signupCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


}])
   
.controller('settingsCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


}])
   
.controller('eventRegisterCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


}])
   
.controller('messagesCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {


}])
/*angular.module('app.controllers', [])


    .controller('DashboardCtrl', function (ItemsModel, $rootScope) {
        var vm = this;

        function goToBackand() {
            window.location = 'http://docs.backand.com';
        }

        function getAll() {
            ItemsModel.all()
                .then(function (result) {
                    vm.data = result.data.data;
                });
        }

        function clearData(){
            vm.data = null;
        }

        function create(object) {
            ItemsModel.create(object)
                .then(function (result) {
                    cancelCreate();
                    getAll();
                });
        }

        function update(object) {
            ItemsModel.update(object.id, object)
                .then(function (result) {
                    cancelEditing();
                    getAll();
                });
        }

        function deleteObject(id) {
            ItemsModel.delete(id)
                .then(function (result) {
                    cancelEditing();
                    getAll();
                });
        }

        function initCreateForm() {
            vm.newObject = {name: '', description: ''};
        }

        function setEdited(object) {
            vm.edited = angular.copy(object);
            vm.isEditing = true;
        }

        function isCurrent(id) {
            return vm.edited !== null && vm.edited.id === id;
        }

        function cancelEditing() {
            vm.edited = null;
            vm.isEditing = false;
        }

        function cancelCreate() {
            initCreateForm();
            vm.isCreating = false;
        }

        vm.objects = [];
        vm.edited = null;
        vm.isEditing = false;
        vm.isCreating = false;
        vm.getAll = getAll;
        vm.create = create;
        vm.update = update;
        vm.delete = deleteObject;
        vm.setEdited = setEdited;
        vm.isCurrent = isCurrent;
        vm.cancelEditing = cancelEditing;
        vm.cancelCreate = cancelCreate;
        vm.goToBackand = goToBackand;
        vm.isAuthorized = false;

        $rootScope.$on('authorized', function () {
            vm.isAuthorized = true;
            getAll();
        });

        $rootScope.$on('logout', function () {
            clearData();
        });

        if(!vm.isAuthorized){
            $rootScope.$broadcast('logout');
        }

        initCreateForm();
        getAll();

    });
*/