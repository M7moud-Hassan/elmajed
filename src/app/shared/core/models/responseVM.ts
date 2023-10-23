export interface ResponseVM {
    status: number,
    success: boolean,
    message: string,
    data: data
}
export interface data {
    items: items[],
    total: number,
    count: number,
    per_page: number,
    current_page: number,
    total_pages: number
}
export interface items {
    id: number,
    title: string,
    question: string,
    youTube: string,
    writer: string,
    audio_file: string,
    pdf_file: string,
    image: string,
    slug: string,
    brief: string,
    no_archives: number,
    archives: any[],
    duration: string,
    launch_date: string
}