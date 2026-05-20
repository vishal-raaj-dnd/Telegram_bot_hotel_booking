import { Router } from 'express';
import { getTenants, getTenant, createTenant, updateTenant, deleteTenant } from '../controllers/tenant.controller';
import { superAdminAuth } from '../middleware/auth.middleware';

const router = Router();

// Protect all tenant CRUD endpoints with super-admin JWT
router.use(superAdminAuth as any);

router.get('/', getTenants);
router.get('/:id', getTenant);
router.post('/', createTenant);
router.patch('/:id', updateTenant);
router.delete('/:id', deleteTenant);

export default router;
