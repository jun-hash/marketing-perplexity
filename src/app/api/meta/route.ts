import { NextApiRequest, NextApiResponse } from "../../../../node_modules/next/dist/shared/lib/utils";



export interface MetaRequestDtO {
    query: string;
}

export interface MetaResponseDto {
    campaings: Array<{
        id: string;
        advertiserName: string;
        campaignCopntent: string;
    }>
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    const { query } : MetaRequestDtO = req.body

    if(!query) {
        return res.status(400).json({error: 'Query is required'})
    }

    try {
        const competitors = await extractCompetitors(query)
        const campaings = await searchMetaAdCampaigns(competitors)
        res.status(200).json({ campaigns })


    } catch (error) {
        console.error(error)
        res.status(500).json({error:'Internal Server Error'})
        
    }

    res.status(200).json({})
}