import PiadasChuckAPI from '@/api/piadaschuck.api';

class PiadasChuckService {
    async getPiadas() {
        try {
            const response = await PiadasChuckAPI.getPiadas()
            if (response && response.data) {
                return response.data
            }
        } catch (error) {
            throw error
        }
    }
}
export default new PiadasChuckService()