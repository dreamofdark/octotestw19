import main from '../../steps/main';
import layout from '../../steps/layout'
import folders from '../../steps/sidebar/folders';
import letters from '../../steps/letters';

// пример теста
describe('test id', () => {
	it('Авторизоваться и открыть первое письмо на странице', () => {
		main.open('https://mail.ru');
		main.login('just_for_test@list.ru', 'QualityAssurance'); // так не надо ))
		layout.setPaneAndSize(3);
		folders.clickFolderByName('Входящие');
		letters.openBySubject('Добро пожаловать в бета-сообщество Почты!'); //
	});
});