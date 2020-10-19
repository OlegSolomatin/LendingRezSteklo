<?php

class ControllerPageOkna extends Controller {

    public function index(){

        // скрипты
        $this->document->addScript('catalog/view/javascript/jquery/magnific/jquery.magnific-popup.min.js');
        $this->document->addScript('catalog/view/theme/default/template/pages/js/mail.js');
        $this->document->addScript('catalog/view/theme/default/template/pages/js/jquery.maskedinput.min.js');
        $this->document->addScript('https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.min.js');
        $this->document->addScript('https://cdnjs.cloudflare.com/ajax/libs/vue-resource/1.2.1/vue-resource.min.js');
        $this->document->addScript('catalog/view/theme/default/template/pages/js/lending.js');
        $this->document->addScript('https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js');
        $this->document->addScript('catalog/view/theme/default/template/pages/js/jquery.fancybox.min.js');
        $this->document->addScript('https://e-timer.ru/js/etimer.js');
        $this->document->addScript('catalog/view/theme/default/template/pages/js/lazysizes.min.js');


        // стили
        $this->document->addStyle('catalog/view/theme/default/template/pages/css/jquery.fancybox.min.css');
        $this->document->addStyle('catalog/view/javascript/jquery/magnific/magnific-popup.css');
        $this->document->addStyle('catalog/view/theme/default/template/pages/css/lendingstyle.css');


        // загружаем части страницы
        $data['footer'] = $this->load->controller('common/footer');
        $data['header'] = $this->load->controller('common/header');

        // переменные, доступные на странице
        $data['heading_title'] = "Окна на заказ";

        // загружаем шаблон для отображения
        $this->response->setOutput($this->load->view('pages/okna', $data));
    }

}

