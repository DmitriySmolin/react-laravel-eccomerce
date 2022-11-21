@extends('admin.admin_master')
@section('admin')

    <div class="page-wrapper">
        <div class="page-content">
            <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">
                <div class="col">
                    <div class="card radius-10 bg-gradient-deepblue">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <h5 class="mb-0 text-white">210</h5>
                                <div class="ms-auto">
                                    <i class='bx bx-cart fs-3 text-white'></i>
                                </div>
                            </div>
                            <div class="progress my-3 bg-light-transparent" style="height:3px;">
                                <div class="progress-bar bg-white" role="progressbar" style="width: 55%"
                                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="d-flex align-items-center text-white">
                                <p class="mb-0">Всего заказов</p>
                                <p class="mb-0 ms-auto">+4.2%<span><i class='bx bx-up-arrow-alt'></i></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card radius-10 bg-gradient-orange">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <h5 class="mb-0 text-white">155795,62₽</h5>
                                <div class="ms-auto">
                                    <i class='bx bx-ruble fs-3 text-white'></i>
                                </div>
                            </div>
                            <div class="progress my-3 bg-light-transparent" style="height:3px;">
                                <div class="progress-bar bg-white" role="progressbar" style="width: 55%"
                                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="d-flex align-items-center text-white">
                                <p class="mb-0">Общий доход</p>
                                <p class="mb-0 ms-auto">+1.2%<span><i class='bx bx-up-arrow-alt'></i></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card radius-10 bg-gradient-ohhappiness">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <h5 class="mb-0 text-white">752</h5>
                                <div class="ms-auto">
                                    <i class='bx bx-group fs-3 text-white'></i>
                                </div>
                            </div>
                            <div class="progress my-3 bg-light-transparent" style="height:3px;">
                                <div class="progress-bar bg-white" role="progressbar" style="width: 55%"
                                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="d-flex align-items-center text-white">
                                <p class="mb-0">Посетители</p>
                                <p class="mb-0 ms-auto">+5.2%<span><i class='bx bx-up-arrow-alt'></i></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card radius-10 bg-gradient-ibiza">
                        <div class="card-body">
                            <div class="d-flex align-items-center">
                                <h5 class="mb-0 text-white">318</h5>
                                <div class="ms-auto">
                                    <i class='bx bx-envelope fs-3 text-white'></i>
                                </div>
                            </div>
                            <div class="progress my-3 bg-light-transparent" style="height:3px;">
                                <div class="progress-bar bg-white" role="progressbar" style="width: 55%"
                                     aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <div class="d-flex align-items-center text-white">
                                <p class="mb-0">Сообщения</p>
                                <p class="mb-0 ms-auto">+2.2%<span><i class='bx bx-up-arrow-alt'></i></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--end row-->
            <div class="card radius-10">
                <div class="card-body">
                    <div class="d-flex align-items-center">
                        <div>
                            <h5 class="mb-0">Статистика заказов</h5>
                        </div>
                        <div class="font-22 ms-auto"><i class="bx bx-dots-horizontal-rounded"></i>
                        </div>
                    </div>
                    <hr>
                    <div class="table-responsive">
                        <table class="table align-middle mb-0">
                            <thead class="table-light">
                            <tr>
                                <th>ID заказа</th>
                                <th>Товар</th>
                                <th>Покупатель</th>
                                <th>Дата</th>
                                <th>Цена</th>
                                <th>Статус</th>
                                <th>Действие</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>#897656</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="recent-product-img">
                                            <img src="{{ asset('backend/assets/images/icons/chair.png') }}" alt="">
                                        </div>
                                        <div class="ms-2">
                                            <h6 class="mb-1 font-14">Стул SC-001 голубой, пластиковый</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>Алексей Патрушев</td>
                                <td>12 Jul 2022</td>
                                <td>3863,68₽</td>
                                <td>
                                    <div class="badge rounded-pill bg-light-info text-info w-100">В процессе</div>
                                </td>
                                <td>
                                    <div class="d-flex order-actions"><a href="javascript:;" class=""><i
                                                class="bx bx-cog"></i></a>
                                        <a href="javascript:;" class="ms-4"><i class="bx bx-down-arrow-alt"></i></a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>#987549</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="recent-product-img">
                                            <img src="{{ asset('backend/assets/images/icons/shoes.png') }}" alt="">
                                        </div>
                                        <div class="ms-2">
                                            <h6 class="mb-1 font-14">Кроссовки Niteball</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>Сергей Батальцев</td>
                                <td>14 Jul 2022</td>
                                <td>2716,65₽</td>
                                <td>
                                    <div class="badge rounded-pill bg-light-success text-success w-100">Завершен</div>
                                </td>
                                <td>
                                    <div class="d-flex order-actions"><a href="javascript:;" class=""><i
                                                class="bx bx-cog"></i></a>
                                        <a href="javascript:;" class="ms-4"><i class="bx bx-down-arrow-alt"></i></a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>#685749</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="recent-product-img">
                                            <img src="{{ asset('backend/assets/images/icons/headphones.png') }}" alt="">
                                        </div>
                                        <div class="ms-2">
                                            <h6 class="mb-1 font-14">Red Line Stereo Headset SP07</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>Иван Колесников</td>
                                <td>15 Jul 2022</td>
                                <td>4044,79₽</td>
                                <td>
                                    <div class="badge rounded-pill bg-light-danger text-danger w-100">Отменен</div>
                                </td>
                                <td>
                                    <div class="d-flex order-actions"><a href="javascript:;" class=""><i
                                                class="bx bx-cog"></i></a>
                                        <a href="javascript:;" class="ms-4"><i class="bx bx-down-arrow-alt"></i></a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>#887459</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="recent-product-img">
                                            <img src="{{ asset('backend/assets/images/icons/idea.png') }}" alt="">
                                        </div>
                                        <div class="ms-2">
                                            <h6 class="mb-1 font-14">L210 Mini Laptop</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>Андрей Орлов</td>
                                <td>18 Jul 2022</td>
                                <td>52521,9₽</td>
                                <td>
                                    <div class="badge rounded-pill bg-light-success text-success w-100">Завершен</div>
                                </td>
                                <td>
                                    <div class="d-flex order-actions"><a href="javascript:;" class=""><i
                                                class="bx bx-cog"></i></a>
                                        <a href="javascript:;" class="ms-4"><i class="bx bx-down-arrow-alt"></i></a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>#335428</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="recent-product-img">
                                            <img src="{{ asset('backend/assets/images/icons/user-interface.png') }}"
                                                 alt="">
                                        </div>
                                        <div class="ms-2">
                                            <h6 class="mb-1 font-14">Смартфон Apple iPhone 14 256GB Purple</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>Анастасия Никитина</td>
                                <td>20 Jul 2022</td>
                                <td>87999₽</td>
                                <td>
                                    <div class="badge rounded-pill bg-light-info text-info w-100">В процессе</div>
                                </td>
                                <td>
                                    <div class="d-flex order-actions"><a href="javascript:;" class=""><i
                                                class="bx bx-cog"></i></a>
                                        <a href="javascript:;" class="ms-4"><i class="bx bx-down-arrow-alt"></i></a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>#224578</td>
                                <td>
                                    <div class="d-flex align-items-center">
                                        <div class="recent-product-img">
                                            <img src="{{ asset('backend/assets/images/icons/watch.png') }}" alt="">
                                        </div>
                                        <div class="ms-2">
                                            <h6 class="mb-1 font-14">Умные часы Crystal HW56plus</h6>
                                        </div>
                                    </div>
                                </td>
                                <td>Евгений Романов</td>
                                <td>22 Jul 2022</td>
                                <td>4829,6₽</td>
                                <td>
                                    <div class="badge rounded-pill bg-light-danger text-danger w-100">Отменен</div>
                                </td>
                                <td>
                                    <div class="d-flex order-actions"><a href="javascript:;" class=""><i
                                                class="bx bx-cog"></i></a>
                                        <a href="javascript:;" class="ms-4"><i class="bx bx-down-arrow-alt"></i></a>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

