<div class="sidebar-wrapper" data-simplebar="true">
    <div class="sidebar-header">
        <div>
            <img src="{{ asset('backend/assets/images/logo-icon.png') }}" class="logo-icon" alt="logo icon">
        </div>
        <div>
            <h4 class="logo-text">E-commerce</h4>
        </div>
        <div class="toggle-icon ms-auto"><i class='bx bx-arrow-to-left'></i>
        </div>
    </div>
    <!--navigation-->
    <ul class="metismenu" id="menu">
        <li>
            <a href="{{ url('/dashboard') }}">
                <div class="parent-icon"><i class='bx bx-home-circle'></i>
                </div>
                <div class="menu-title">Управление</div>
            </a>
        </li>
        <li class="menu-label">Управление сайтом</li>
        <li>
            <a href="javascript:;" class="has-arrow">
                <div class="parent-icon"><i class='bx bx-cart'></i>
                </div>
                <div class="menu-title">Категории</div>
            </a>
            <ul>
                <li><a href="{{ route('all.category') }}"><i class="bx bx-right-arrow-alt"></i>Все категории</a>
                </li>
                <li><a href="{{ route('add.category') }}"><i class="bx bx-right-arrow-alt"></i>Добавить категорию</a>
                </li>
            </ul>
        </li>
        <li>
            <a class="has-arrow" href="javascript:;">
                <div class="parent-icon"><i class='bx bx-bookmark-heart'></i>
                </div>
                <div class="menu-title">Подкатегории</div>
            </a>
            <ul>
                <li><a href="{{ route('all.subcategory') }}"><i class="bx bx-right-arrow-alt"></i>Все подкатегории</a>
                </li>
                <li><a href="{{ route('add.subcategory') }}"><i class="bx bx-right-arrow-alt"></i>Добавить подкатегорию</a>
                </li>

            </ul>
        </li>
        <li>
            <a class="has-arrow" href="javascript:;">
                <div class="parent-icon"><i class="bx bx-repeat"></i>
                </div>
                <div class="menu-title">Слайдер</div>
            </a>
            <ul>
                <li><a href="{{ route('all.slider') }}"><i class="bx bx-right-arrow-alt"></i>Все слайды</a>
                </li>
                <li><a href="{{ route('add.slider') }}"><i class="bx bx-right-arrow-alt"></i>Добавить слайд</a>
                </li>
            </ul>
        </li>
        <li>
            <a class="has-arrow" href="javascript:;">
                <div class="parent-icon"><i class="bx bx-repeat"></i>
                </div>
                <div class="menu-title">Товары</div>
            </a>
            <ul>
                <li><a href="{{ route('all.product') }}"><i class="bx bx-right-arrow-alt"></i>Все Товары</a>
                </li>
                <li><a href="{{ route('add.product') }}"><i class="bx bx-right-arrow-alt"></i>Добавить товар</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="{{ route('contact.message') }}">
                <div class="parent-icon"><i class="bx bx-donate-blood"></i>
                </div>
                <div class="menu-title">Сообщения</div>
            </a>
        </li>
        <li>
            <a href="{{ route('all.review') }}">
                <div class="parent-icon"><i class="bx bx-donate-blood"></i>
                </div>
                <div class="menu-title">Отзывы о товарах</div>
            </a>
        </li>
        <li>
            <a class="has-arrow" href="javascript:;">
                <div class="parent-icon"><i class="bx bx-donate-blood"></i>
                </div>
                <div class="menu-title">Содержимое сайта</div>
            </a>
            <ul>
                <li><a href="{{ route('getsite.info') }}"><i class="bx bx-right-arrow-alt"></i>Изменить содержимое сайта</a>
                </li>
            </ul>
        </li>
        <li class="menu-label">Заказ покупателя</li>
        <li>
            <a class="has-arrow" href="javascript:;">
                <div class="parent-icon"><i class='bx bx-message-square-edit'></i>
                </div>
                <div class="menu-title">Управление заказами</div>
            </a>
            <ul>
                <li><a href="{{ route('pending.order') }}"><i class="bx bx-right-arrow-alt"></i>Отложенный заказ </a>
                </li>
                <li><a href="{{ route('processing.order') }}"><i class="bx bx-right-arrow-alt"></i>Заказ в обработке</a>
                </li>
                <li><a href="{{ route('complete.order') }}"><i class="bx bx-right-arrow-alt"></i>Заказ завершен</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="https://themeforest.net/user/codervent" target="_blank">
                <div class="parent-icon"><i class="bx bx-support"></i>
                </div>
                <div class="menu-title">Поддержка</div>
            </a>
        </li>
    </ul>
    <!--end navigation-->
</div>
