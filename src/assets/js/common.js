var Stock = function (options) {
    var defaultOptions = {
        loginForm: '#login',
        loginButton: '#login-button',
        registerForm: '#register',
        registerButton: '#register-button',
        step: 1
    };

    var _this = this;

    this.options = $.extend(defaultOptions, options);

    this.login = function () {
        var $loginButton = $(this.options.loginButton);
        var $loginForm = $(this.options.loginForm);

        if ($loginForm.length && $loginButton.length) {
            $loginForm.validate({
                validClass: 'form__valid',
                errorClass: 'form__error',
                rules: {
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true,
                        minlength: 6,
                        maxlength: 12
                    }
                },
                messages: {
                    email: {
                        required: 'Vui lòng nhập email',
                        email: 'Vui lòng nhập email hợp lệ'
                    },
                    password: {
                        required: 'Vui lòng cung cấp mật khẩu',
                        minlength: 'Mật khẩu phải có ít nhất 6 ký tự',
                        maxlength: 'Mật khẩu không quá 12 ký tự'
                    }
                }
            });

            $loginButton.on('click', function (event) {
                event.preventDefault();
                if ($loginForm.validate().form()) {
                    console.log('call ajax or enable submit form');
                }
            });
        }
    };

    this.register = function () {
        var $registerButton = $(this.options.registerButton);
        var $registerForm = $(this.options.registerForm);

        if ($registerForm.length && $registerButton.length) {
            $registerForm.validate({
                validClass: 'form__valid',
                errorClass: 'form__error',
                errorPlacement: function (error, element) {
                    console.log(error, element);
                    if (element.attr('name') === 'terms') {
                        error.appendTo(element.parent());
                    } else {
                        error.insertAfter(element);
                    }
                },
                rules: {
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true,
                        minlength: 6,
                        maxlength: 12
                    },
                    repassword: {
                        required: true,
                        minlength: 6,
                        maxlength: 12,
                        equalTo: '#password'
                    },
                    terms: {
                        required: true
                    }
                },
                messages: {
                    email: {
                        required: 'Vui lòng nhập email',
                        email: 'Vui lòng nhập email hợp lệ'
                    },
                    password: {
                        required: 'Vui lòng nhập mật khẩu',
                        minlength: 'Mật khẩu phải có ít nhất 6 ký tự',
                        maxlength: 'Mật khẩu không quá 12 ký tự'
                    },
                    repassword: {
                        required: 'Vui lòng xác nhận mật khẩu',
                        minlength: 'Mật khẩu phải có ít nhất 6 ký tự',
                        maxlength: 'Mật khẩu không quá 12 ký tự',
                        equalTo: 'Xác nhận mật khẩu không đúng'
                    },
                    terms: {
                        required: 'Vui lòng đồng ý với điều khoản'
                    }
                }
            });

            $registerButton.on('click', function (event) {
                event.preventDefault();
                if ($registerForm.validate().form()) {
                    console.log('call ajax or enable submit form');
                }
            });
        }
    };

    this.customSelect = function () {
        $('select').each(function () {

            var $this = $(this),
                numberOfOptions = $(this).children('option').length;

            $this.addClass('select--hidden');
            $this.wrap('<div class="select"></div>');
            $this.after('<div class="select__choose"></div>');

            var $select__choose = $this.next('div.select__choose');
            $select__choose.text($this.children('option').eq(0).text());

            var $list = $('<ul />', {
                'class': 'select__options'
            }).insertAfter($select__choose);

            for (var i = 0; i < numberOfOptions; i++) {
                var classActive = $this.children('option').eq(i).val() == $this.val() ? 'active' : '';
                $('<li />', {
                    text: $this.children('option').eq(i).text(),
                    rel: $this.children('option').eq(i).val(),
                    'class': classActive
                }).appendTo($list);
            }

            var $listItems = $list.children('li');

            $select__choose.click(function (e) {
                e.stopPropagation();
                $(this).toggleClass('active').next('ul.select__options').toggle();
            });

            $listItems.click(function (e) {
                e.stopPropagation();
                $listItems.removeClass('active');
                $select__choose.text($(this).text()).removeClass('active');
                $this.val($(this).attr('rel'));
                $(this).addClass('active');
                $list.hide();
            });

            $(document).click(function () {
                $select__choose.removeClass('active');
                $list.hide();
            });
        });
    };

    this.inputNumber = function () {
        var $decrease = $('.exchange__decrement');
        var $increase = $('.exchange__increment');

        $decrease.on('click', function () {
            var $input = $(this).parent().find('input[type="number"]');

            if ($input.length) {
                var step = parseFloat($input.attr('step') || 0) || _this.options.step;
                var min = parseFloat($input.attr('min') || 0);
                var value = parseFloat($input.val() || 0);

                if (value - step > min) {
                    value -= step;
                } else {
                    value = 0;
                }

                $input.val(value);
            }
        });

        $increase.on('click', function () {
            var $input = $(this).parent().find('input[type="number"]');

            if ($input.length) {
                var step = parseFloat($input.attr('step') || 0) || _this.options.step;
                var value = parseFloat($input.val() || 0);

                value += step;
                $input.val(value);
            }
        });
    };

    this.handleExchange = function () {
        var $exchange = $('.exchange');
        var $tab = $('.exchange__tab');
        var $submit = $('.exchange__submit');
        var classActive = 'exchange__tab--selected';

        $tab.on('click', function (event) {
            event.preventDefault();
            var $this = $(this);
            var action = $this.data('action');

            $tab.removeClass(classActive);
            $(this).addClass(classActive);
            $exchange.attr('data-action', action);
        });

        $submit.on('click', function () {
            var data = {
                action: $exchange.data('action'),
                type: $exchange.find('[name="type"]').val(),
                price: $exchange.find('[name="price"]').val(),
                range: $exchange.find('[name="range"]').val(),
                total: $exchange.find('[name="total"]').val()
            };

            console.log(data);
        });
    };

    this.handleSchedule = function () {
        var $chart = $('[data-chart="circle"]');
        var $toggle = $('.schedule__toggle');

        if ($chart.length) {
            $chart.each(function () {
                var type = $(this).data('type');
                var fillColor = type === 'sell' ? '#e45360' : '#2ebd85';

                $(this).percentcircle({
                    animate: true,
                    diameter: 48,
                    guage: 2,
                    coverBg: '#252b31',
                    bgColor: '#4d545e',
                    fillColor: fillColor,
                    percentSize: '15px',
                    percentWeight: 'normal'
                });
            });
        }

        $toggle.on('click', function (event) {
            event.preventDefault();
            var $target = $($(this).attr('href'));
            $target.slideToggle(500);
        });
    };

    this.toggleMenuAside = function () {
        var $btnControlAside = $('[data-control="aside"]');
        var $btnControlMenu = $('[data-control="menu"]');
        var $body = $('body');

        $btnControlAside.on('click', function (e) {
            e.preventDefault();
            $body.removeClass('is-menu').toggleClass('is-aside');
        });

        $btnControlMenu.on('click', function (e) {
            e.preventDefault();
            $body.removeClass('is-aside').toggleClass('is-menu');
        });
    };

    this.login();
    this.register();
    this.customSelect();
    this.inputNumber();
    this.handleExchange();
    this.handleSchedule();
    this.toggleMenuAside();
};

$(document).ready(function () {
    new Stock();
});
//# sourceMappingURL=common.js.map
