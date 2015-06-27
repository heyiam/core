AT.prototype.atNavButtonHelpers = {
    text: function(){
        var key = (Meteor.userId() && !isGuest())   ? AccountsTemplates.texts.navSignOut : AccountsTemplates.texts.navSignIn;
        return T9n.get(key, markIfMissing=false);
    }
};

AT.prototype.atNavButtonEvents = {
    'click #at-nav-button': function(event){
        var user = Meteor.user();
        event.preventDefault();
        if (Meteor.userId() && !isGuest())
            AccountsTemplates.logout();
        else
            AccountsTemplates.linkClick("signIn");
    },
};
