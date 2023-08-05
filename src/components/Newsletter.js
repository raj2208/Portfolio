import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row>
          <Col lg={12} md={8} xl={5}>
            <h3>
              Send me your Email<br></br> or Share the Career page link
            </h3>
          </Col>
          <Col md={6} xl={7}>
            <form
              method="POST"
              action="https://getform.io/f/20adf2ec-ade5-49ba-bbd3-87250dcd05fc"
            >
              <div className="new-email-bx">
                <input
                  type="text"
                  name="email"
                  placeholder="Send Link / Your Email"
                />
                {/* <button type="submit">Send</button> */}
              </div>
              <br />
              <div className="raj-button">
                <button type="submit">Send</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
