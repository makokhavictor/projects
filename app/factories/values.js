angular.module('main').value('appSettings',{
	CMS_HOST: window.location.protocol + '//'+ window.location.hostname + '/',
	APP_NAME: "Projects App",
	get API_PATH() {return this.CMS_HOST + "api/";}
	
});