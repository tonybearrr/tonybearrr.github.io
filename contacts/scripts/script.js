/*
Буду очень Вам благодарен за фитбек насколько все плохо/хорошо, так как, 
честно сказать, это мое первое знакомство с backbone.js
*/


//Модель пользователя
var User = Backbone.Model.extend({
    defaults: {
        user: '',
        phone: '',
    }
})
//Коллекция пользователей
var Users = Backbone.Collection.extend({
    // url: 'http://localhost:4200/api/users' URL, откуда мы будет получать данные
});

//Инициализация списка пользователей при загрузке страницы
$(document).ready(function () {
    let user1 = new User({
        user: 'Tony',
        phone: '+869-434-43'
    })
    let user2 = new User({
        user: 'Alex',
        phone: '67990-0090'
    })
    let user3 = new User({
        user: 'Anna',
        phone: '8989700087'
    })
    let user4 = new User({
        user: 'Paul',
        phone: '9090888-99'
    })
    let user5 = new User({
        user: 'Jan',
        phone: '+8988-323-3'
    })

    users.add([user1, user2, user3, user4, user5])
});


var users = new Users()

//Представление одного пользователя
var UserView = Backbone.View.extend({
    model: new User(),
    tagName: 'tr',
    initialize: function () {
        this.template = _.template($('.users-list-template').html())
    },
    events: {
        'click .edit-user': 'edit',
        'click .update-user': 'update',
        'click .delete-user': 'delete',
        'click .cancel-user': 'cancel'
    },
    edit: function () {
        this.$('.edit-user').hide();
        this.$('.delete-user').hide();
        this.$('.update-user').show();
        this.$('.cancel-user').show();

        var user = this.$('.user').html();
        var phone = this.$('.phone').html();
        this.$('.user').html(`<input type="text" class="user-update input" value="${user}"><p class="help name-validation-error is-danger"></p>`);
        this.$('.phone').html(`<input type="text" class="phone-update input" value="${phone}"><p class="help phone-validation-error is-danger"></p>`);
    },
    update: function () {
        //Валидация данных при апдейте 
        let regExp = /^\+?\d{1,5}(\-*)\d{1,5}(\-*)\d{1,5}$/;
        if (this.$('.user-update').val().trim() == '') {
            this.$('.name-validation-error').html('Name field is invalid')
        } else if (!regExp.test(this.$('.phone-update').val())) {
            this.$('.phone-validation-error').html('Phone field is invalid')
            this.$('.name-validation-error').html('')

        } else {
            this.model.set('user', $('.user-update').val());
            this.model.set('phone', $('.phone-update').val());
        }

    },
    delete: function () {
        this.model.destroy();
    },
    cancel: function () {
        usersView.render();
    },
    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
})
//Представление всех пользователей (списка)
var UsersView = Backbone.View.extend({
    model: users,
    el: $('.users-list'),
    initialize: function () {
        var self = this;
        this.model.on('add', this.render, this);
        this.model.on('change', function () {
            setTimeout(function () {
                self.render()
            }, 30)
        }, this);
        this.model.on('remove', this.render, this);

        //Здесь можно получить и обработать полученые данные
        // this.model.fetch({
        //     success: function (res) {
        //         _.each(res.toJSON(), function (elem) {
        //             console.log(`Seccess ${elem.smth}`);
        //         })
        //     },
        //     error: function () {
        //         console.log('Failed')
        //     }
        // });

    },
    render: function () {
        var self = this;
        this.$el.html('');
        _.each(this.model.toArray(), function (user) {
            self.$el.append((new UserView({
                model: user
            })).render().$el);
        });
        return this;
    }
});

var usersView = new UsersView();

//Блок кода на JS 
document.addEventListener('DOMContentLoaded', function () {
    let addBtn = document.querySelector('.add-user');
    addBtn.onclick = function () {
        let userName = document.querySelector('.user-input');
        let phoneNumber = document.querySelector('.phone-input');
        let errorName = document.querySelector('.name-validation-error');
        let errorPhone = document.querySelector('.phone-validation-error');

        let regExp = /^\+?\d{1,5}(\-*)\d{1,5}(\-*)\d{1,5}$/;
        if (userName.value.trim() == '') {
            errorName.innerHTML = 'Name field is invalid';
        } else if (!regExp.test(phoneNumber.value)) {
            errorPhone.innerHTML = 'Phone field is ivalid';
            errorName.innerHTML = ''
        } else {
            var user = new User({
                user: userName.value,
                phone: phoneNumber.value,
            });
            errorPhone.innerHTML = '';
            errorName.innerHTML = '';
            userName.value = '';
            phoneNumber.value = '';
            users.add(user)
        }

        // Здесь можно реализовать сохранение данных в БД
        // user.save({
        //     success: function (res) {
        //         console.log('success')
        //     },
        //     error: function(){
        //         console.log('error')
        //     }
        // })
    }
})