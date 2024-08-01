import Image from "next/image";
import React from "react";
import Container from "../common/container";

export const ConsultingSection = () => {
  return (
    <div className="consultingSection">
      <Container>
        <div className="bg-image">
          <div className="row">
            <div className="col-md-6 left-section">
              <div className="content">
                <h3>CONSULTING</h3>
                <p>Our experts decode all industries, from tech to art, Whatever your needs may be, we have the acumen and the audacity to transform them into triumphs through confident consulting.</p>
                <button className="btn btn-outline-light">Talk To Us!</button>
                <Image
                  src="/home/tf-1.png"
                  alt="Person"
                  className="bottom-image left"
                  width={810}
                  height={1058}
                />
              </div>
            </div>
            <div className="col-md-6 right-section">
              <div className="content text-end">
                <h3>BUSINESS OUTCOME</h3>
                <p style={{marginLeft: 'auto'}}>So whether you’re a new entrepreneur seeking guidance or a seasoned titan of industry in need of a fresh perspective, its time to redefine goals where innovation meets inspiration.</p>
                <button className="btn btn-outline-light">Talk To Us!</button>
                <Image
                  src="/home/tf-2.png"
                  alt="Building"
                  className="bottom-image right"
                  width={233}
                  height={1057}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
