import React from "react";


export default function Form(props) {
    const { takimUyeleri, handleChange, handleSubmit, butonDisabledMi } = props;

    return (
        <>
            <h1>Yazılımcı Listesi</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="isim">İsim: </label>
                <input
                    id="isim"
                    type="text"
                    value={takimUyeleri.isim}
                    onChange={(olay) => handleChange(olay)}
                />

                <label htmlFor="yazılım dili">Yazılım Dili: </label>
                <input
                    id="dil"
                    type="text"
                    value={takimUyeleri.dil}
                    onChange={(olay) => handleChange(olay)}
                />

                <label htmlFor="yaş">Yaş: </label>
                <input
                    id="yaş"
                    type="number"
                    value={takimUyeleri.yaş}
                    onChange={(olay) => handleChange(olay)}
                />
                <p>
                    <input
                        className="kaydetButton"
                        name="kaydet"
                        type="submit"
                        disabled={butonDisabledMi}
                    />
                </p>
            </form>

        </>
    );
}