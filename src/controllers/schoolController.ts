import { Request, Response } from 'express';
import schoolRepository from '../repositories/schoolRepository';

class SchoolController {
  async listSchools(req: Request, res: Response) {
    try {
      const schools = await schoolRepository.getAllSchools();

      res.status(200).json({ schools });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter a lista de escolas.' });
    }
  }

  async getSchoolById(req: Request, res: Response) {
    try {
      const id = req.params.id; // Pega o ID da rota
      const school = await schoolRepository.getSchoolById(id);

      if (!school) {
        res.status(404).json({ error: 'Escola não encontrada.' });
        return;
      }

      res.status(200).json({ school });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter os dados da escola.' });
    }
  }
}

export default new SchoolController();
