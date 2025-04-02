import { Request, Response } from "express";
import { StringService } from "../services/string.service";
export const StringController = {
    addString: (req: Request, res: Response) => {
        try {
            const stringNumnbers = req.body.string;
            const result = StringService.addStringNumbers(stringNumnbers);
            res.status(200).json({ "sum": result })
        } catch (err: any) {
            res.status(400).json({ error: err?.message })
        }

    }
}