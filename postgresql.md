# breaking down the database design -- outline for models.

[database screenshot]<img width="1436" alt="Screenshot 2023-04-11 at 2 16 08 PM" src="https://user-images.githubusercontent.com/106884081/231273089-16bb189f-7e68-4ed8-878c-429febf0c96e.png">

[wireframe screenshot]<img width="1282" alt="tldraw" src="https://user-images.githubusercontent.com/106884081/231278116-de06f32f-b067-49b9-a70d-039a6d2fe529.png">

Customer():
    user (will have one to one relationship with User, which is imported from django.auth...)
    name 
    email 

Product():
    name
    price
    digital (the thought behind this is whether a product is digital (T/F), meaning do we need to ship it?)
    image

Order():
    customer (will have foreign key, to Customer)
    date_ordered
    complete ((T/F), lets us track if order is fulfilled or if we need to ship it (if complete --> delete?))
    transaction_id

OrderItem():
    product (will have foreign key, to Product)
    order (will have foreign key, to Order)
    quantity
    date_added

ShippingAddress():
    customer (will have foreign key, to Customer)
    order (will have foreign key, to Order)
    address 
    city 
    state 
    zipcode 
    date_added 

