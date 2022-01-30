import * as methods from '../methods'

export default () => {
    describe('createdResponse', () => {
        test('Should be equal with success response', () => {
            expect(methods.createdResponse().status).toEqual(true)
            expect(methods.createdResponse({ test: 'test' }).data).toEqual({ test: 'test' })
        })
    })
}