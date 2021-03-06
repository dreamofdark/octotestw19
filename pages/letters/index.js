import DefaultPage from '../default';

class LettersPage extends DefaultPage {
	constructor() {
		super('letters')
	}

	get locators () {
		const container = '[data-qa-id="dataset-letters"]';
		return {
			container,
			letterBySubject: (subject) => {
				// subject = subject === '' ? '<Без темы>' : subject.replace('"', '\\"');

				return `${this.locators.container} [data-qa-id="letter-item:subject:${subject}"]`;
			}
		}
	}

	/**
	 * Проверяет есть ли письмо с темой
	 *
	 * @param {string} subject
	 * @param {boolean} reverse
	 * @returns {boolean}
	 */
	hasLetterBySubject (subject, reverse = false) {
		try {
			this.page.waitForVisible(this.locators.letterBySubject(subject), null, reverse);

			return true;
		} catch (err) {
			return false;
		}
	}

	/**
	 * Открыть письмо по теме
	 * @param  {string} subject
	 */
	openBySubject (subject) {
		this.page.click(this.locators.letterBySubject(subject));
	}

	openMailing() {
		const mailingContainer = '[data-qa-id="metathread-item:folder:500013"]';
		this.page.click(mailingContainer);
	}



}

export default new LettersPage();
