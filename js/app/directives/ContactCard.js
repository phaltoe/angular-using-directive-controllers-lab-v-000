function ContactCard() {
	return {
		scope: {
			name: '=',
			email: '=',
			phone: '=',
			username: '='
		},
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ name }}',
				'<label>Email:</label>',
				'{{ email }}',
				'<label>Phone:</label>',
				'{{ phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ username }}</span>',
			'</div>'
		].join(''),
		controller: function($scope){	
			this.makeItLowerCase = function() {
				$scope.username = $scope.username.toLowerCase();
			};
			this.makeItLowerCase();
		},
		controlerAs: 'ctrl',
		restrict: 'E'
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);