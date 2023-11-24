import { login } from './login'
describe('login', () => {

    const mockAlert = jest.fn();
    window.alert = mockAlert

    it('Deve exibir um alert de boas vindas', () => {
        login()
        expect(mockAlert).toBeCalled()
    })
})