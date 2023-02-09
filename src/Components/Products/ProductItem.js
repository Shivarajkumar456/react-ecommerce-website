import React from "react";
import { Card, Form, Button } from "react-bootstrap";

const ProductItem = (props) => {
    const price = `$${props.price}`
    return <>

        <Card className="mt-3 mb-3">
            <Card.Header className="p-4 text-center">
                <h1>{props.title}</h1>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group>
                        <Card.Img src={props.src} />
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-between mt-3">
                        <span>{price}</span>
                        <Button>Add to Cart</Button>
                    </Form.Group>
                </Form>
            </Card.Body>
        </Card>

    </>
}

export default ProductItem;