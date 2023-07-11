import React from "react";
import Meta from "../components/Meta";
import BrandCrumb from "../components/BrandCrumb";
import Container from "../components/Container";

const TermAndContions = () => {
  return (
    <>
      <Meta title="Terms & Conditions - Digitic" />
      <BrandCrumb title="Terms & Conditions" />

      <Container class1="terms-wrapper py-5 home-wrapper-2">
      <div className="row">
            <div className="col-12">
              <div class="terms-card">
                <h5 class="terms-title">The Standard Lorem Ipsum Passage</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  accumsan turpis posuere cursus ultricies. Ut nunc justo,
                  faucibus eget elit quis, vehicula rhoncus nulla. Phasellus
                  convallis sem nec facilisis commodo. Fusce ut molestie turpis.
                  Suspendisse aliquet sed massa in vulputate. Quisque gravida
                  suscipit tincidunt.
                </p>
                <h5 class="terms-title">
                  At Vero Eos Et Accusamus Et Iusto Odio Dignissimos
                </h5>
                <p>
                  Mauris elementum scelerisque elit non egestas. Cras lacus
                  nibh, pretium quis bibendum nec, dapibus a metus. Morbi eros
                  lectus, aliquam eu aliquam id, fringilla nec eros. Praesent
                  suscipit commodo diam, non viverra turpis dapibus malesuada.
                  Duis cursus metus eu sem eleifend, id rhoncus odio porttitor.
                </p>
                <h5 class="terms-title">
                  Certain Circumstances And Owing To The Claims Of Duty Or The
                  Obligations
                </h5>
                <p>
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes.
                </p>
                <h5 class="terms-title">
                  Integer Ultrices Laoreet Nunc In Gravida
                </h5>
                <p>
                  Sed lobortis pulvinar viverra. Cum sociis natoque penatibus et
                  magnis dis parturient montes, nascetur ridiculus mus. Mauris
                  suscipit dolor scelerisque, bibendum tellus ac, pharetra
                  sapien. Praesent lacinia scelerisque odio et consequat. In a
                  facilisis lacus. Maecenas vel lobortis tellus.
                </p>
              </div>
            </div>
          </div>
      </Container>
      
    </>
  );
};

export default TermAndContions;
