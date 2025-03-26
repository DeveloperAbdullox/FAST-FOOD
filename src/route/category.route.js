import { Router } from "express";
import categoryController from "../controller/category.controller";
import { ValidationMiddleware } from "../middleware/validation.middlware";
import { createCategorySchema, updateCategorySchema } from "../schema/category.schema";

const categoryRouter = Router()

categoryRouter.get("/", categoryController.getAllCategories)
categoryRouter.get("/:id", categoryController.getOneCategory)
categoryRouter.post("/",ValidationMiddleware(createCategorySchema), categoryController.createCategory)
categoryRouter.put("/:id",ValidationMiddleware(updateCategorySchema), categoryController.updateCategory)
categoryRouter.delete("/:id", categoryController.deleteCategory)

export default categoryRouter;