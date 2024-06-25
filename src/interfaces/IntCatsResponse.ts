export interface IntCatsResponse {
    current_page:   number;
    data:           IntCatsData[];
    first_page_url: string;
    from:           number;
    last_page:      number;
    last_page_url:  string;
    links:          IntLinksCats[];
    next_page_url:  string;
    path:           string;
    per_page:       number;
    prev_page_url:  null;
    to:             number;
    total:          number;
}

export interface IntCatsData {
    fact:   string;
    length: number;
}

export interface IntLinksCats {
    url:    null | string;
    label:  string;
    active: boolean;
}
