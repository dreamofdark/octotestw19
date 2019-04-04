import main from '../../steps/main';
import layout from '../../steps/layout'
import folders from '../../steps/sidebar/folders';
import letters from '../../steps/letters';

describe('Проверить, что можно войти в "Рассылки" и открыть письмо', () => {
    it('Авторизоваться, зайти в рассылки и открыть письмо', () => {
        main.open('https://mail.ru');
        // main.login('just_for_test@list.ru', 'QualityAssurance'); // так не надо ))
        main.login(process.env.LOGIN, process.env.PASSWORD);
        layout.setPaneAndSize(3);
        folders.clickFolderByName('Рассылки');
        letters.openMailing();
        letters.openBySubject('Ура, вы с нами! Ваш логин  + скидка 10% внутри ➜');
    });
});