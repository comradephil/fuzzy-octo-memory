angular.module("slideshow",[])
	.service("imageService", function ($http) {
		return {
			getImages: function () {
				return $http.get("../imgs/work.json", { responseType: "json" });
			}
		}
	})
	.controller("slideshowViewer", function($scope, imageService) {		
		imageService.getImages().success(function(result) {
			$scope.images =	result;
		})
	})
