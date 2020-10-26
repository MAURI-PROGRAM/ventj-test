import { InformationProduct } from './informationProduct';
import { Category } from './category';
import { Tag } from './tag';
import { Condition } from './condition';
import { Color } from './color';
import { SaleStatus } from './saleStatus';
import { Location } from './Location';
import { Photo } from './photo';
import { availabledContactMethods } from './availabledContactMethods';
import { deliveryPreference } from './deliveryPreference';
import { StatusProduct } from './statusProduct';

export interface Product {

    id: string;
    information: InformationProduct;
    categories: Array<Category>;
    tags: Array<Tag>;
    condition: Condition;
    color: Array<Color>;
    price: number;
    saleStatus: SaleStatus;
    location: Location;
    photos: Array<Photo>;
    availabledContactMethods: Array<availabledContactMethods>;
    deliveryPreference: deliveryPreference;
    status: StatusProduct;

}
