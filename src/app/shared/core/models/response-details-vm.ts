export interface ResponseDetailsVM {
    status: number,
    success: boolean,
    message: string,
    data: ResponseDetailsItemVM
}

export interface ResponseDetailsItemVM {
    item: ResponseDetailsItemDetailsVM
}
export interface ResponseDetailsItemDetailsVM {
    id: number;
    title: string;
    question: string;
    image: string;
    category: any;
    slug: string;
    archives: any[];
    youTube: string;
    pdf_file: string;
    audio_file: string;
    note: string;
    author: authorVM;
    writer: string;
    answered_at: string;
    created_at: string;
    updated_at: string;
    hijri_answered_at: string;
    hijri_created_at: string;
    hijri_updated_at: string;
    answer: string;
    brief: string;
    duration: string;
    launch_date: string;
    images: any[],
    conferences:string;
    representation:string;
}
export interface authorVM{
    id: number;
    name: string;
    username: string;
    image: string;
}