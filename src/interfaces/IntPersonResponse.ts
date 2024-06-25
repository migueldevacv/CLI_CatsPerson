export interface IntPersonResponse {
    results: IntPersonData[];
    info:    IntInfo;
}

export interface IntInfo {
    seed:    string;
    results: number;
    page:    number;
    version: string;
}

export interface IntPersonData {
    gender:     string;
    name:       IntName;
    location:   IntLocation;
    email:      string;
    login:      IntLogin;
    dob:        IntDob;
    registered: IntDob;
    phone:      string;
    cell:       string;
    id:         IntID;
    picture:    IntPicture;
    nat:        string;
}

export interface IntDob {
    date: Date;
    age:  number;
}

export interface IntID {
    name:  string;
    value: string;
}

export interface IntLocation {
    street:      Street;
    city:        string;
    state:       string;
    country:     string;
    postcode:    number;
    coordinates: IntCoordinates;
    timezone:    IntTimezone;
}

export interface IntCoordinates {
    latitude:  string;
    longitude: string;
}

export interface Street {
    number: number;
    name:   string;
}

export interface IntTimezone {
    offset:      string;
    description: string;
}

export interface IntLogin {
    uuid:     string;
    username: string;
    password: string;
    salt:     string;
    md5:      string;
    sha1:     string;
    sha256:   string;
}

export interface IntName {
    title: string;
    first: string;
    last:  string;
}

export interface IntPicture {
    large:     string;
    medium:    string;
    thumbnail: string;
}
