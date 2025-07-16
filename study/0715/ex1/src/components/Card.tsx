import React from "react";

function Profile() {
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white border border-gray-400 rounded-lg shadow text-center ">
      <img
        src="https://www.hyundaicard.com/docfiles/resources/mo/images/ben/img_bene_car.png"
        className="rounded-full mx-auto mb-4"
        alt="자동차 이미지"
      />
      <h2 className="text-xl font-semibold">홍길동</h2>
      <p className="text-gray-500">Frontend Developer</p>
      <p className="mt-2 text-sm text-gray-700">
        React와 Tailwind를 배우는 중입니다.
      </p>
    </div>
  );
}
export default Profile;
