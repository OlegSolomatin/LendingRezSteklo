<?php

class ControllerPageRezka extends Controller {

    public function index(){

        // скрипты
        $this->document->addScript('catalog/view/javascript/jquery/magnific/jquery.magnific-popup.min.js');
        $this->document->addScript('catalog/view/theme/default/template/rezka/js/rezkalending.js');
        $this->document->addScript('//script.marquiz.ru/v1.js');
        $this->document->addScript('catalog/view/theme/default/template/rezka/js/lazysizes.min.js');
        $this->document->addScript('catalog/view/theme/default/template/rezka/js/jquery.fancybox.min.js');


        // стили
        $this->document->addStyle('catalog/view/theme/default/template/rezka/css/jquery.fancybox.min.css');
        $this->document->addStyle('catalog/view/javascript/jquery/magnific/magnific-popup.css');
        $this->document->addStyle('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.3/animate.min.css');
        //$this->document->addStyle('https://file.myfontastic.com/qGaNk6NQrd9vYMKzGhmsrS/icons.css');
        $this->document->addStyle('catalog/view/theme/default/template/rezka/css/rezkastyle.css');


        // загружаем части страницы
        $data['footer'] = $this->load->controller('common/footer');
        $data['header'] = $this->load->controller('common/header');

        // переменные, доступные на странице
        $data['heading_title'] = "Rezka Stekla Kolomna";

        // загружаем шаблон для отображения
        $this->response->setOutput($this->load->view('rezka/rezka', $data));
    }

}

