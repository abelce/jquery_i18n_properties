var LANGUAGE_CODE = "en_US"; //标识语言

function loadProperties(type) {
    jQuery.i18n.properties({
        name: 'strings', // 资源文件名称
        path: 'static/', // 资源文件所在目录路径
        mode: 'map', // 模式：变量或 Map 
        language: type, // 对应的语言
        cache: false,
        encoding: 'UTF-8',
        callback: function () { // 回调方法    
            $('#text').html($.i18n.prop('string_text'));
            $('#lang').html($.i18n.prop('string_lang'));
        }
    });
}

function switchLang() {
    LANGUAGE_CODE = LANGUAGE_CODE == 'zh_CN' ? 'en_US' : 'zh_CN';
    loadProperties(LANGUAGE_CODE);
}

$(document).ready(function () {
    LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({}); //获取浏览器的语言     
    loadProperties(LANGUAGE_CODE);
})