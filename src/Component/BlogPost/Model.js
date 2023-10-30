import "./styles.css";
import { Button, Modal } from "antd";
import { RightCircleFilled } from "@ant-design/icons";
import React from "react";
import { useState } from "react";
const ModelBlog = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(props.open);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        className="postBtn"
        icon={<RightCircleFilled />}
        onClick={showModal}
      >
        READ MORE
      </Button>

      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered="true"
        footer={null}
        width="80%"
        className="modalStyle"
      >
        <div className="modalContent">
          <img src={props.image} className="modalImage" alt=""></img>
          <div className="modalDescription">
            <h1>{props.title}</h1>
            <p>
             {props.content}
             
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ModelBlog;
