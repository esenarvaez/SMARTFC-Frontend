export class Review {
    id_actividad: string;
    reviews: [
        {
            id_qalify: number,
            defaultRating: number
        }
    ]
    constructor(
        id_actvidad: string,
        reviews: [{
            id_qalify: number,
            defaultRating: number
        }
        ]
    ) {
        this.id_actividad = id_actvidad;
        this.reviews = reviews;
    }
}