import React from "react";
import '../components/Section1.css'
import Button from "./Buttons";
function Section1({heading, para}) {
    return (
        <section className="secction1">
            <div className="s1Child">
                <div className="w-1/2 text-center flex flex-wrap gap-6 justify-center pb-9">
                   <h1 className="font-serif font-bold text-3xl mb-8">Think Health. Think Message.</h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nihil voluptates nostrum minima natus eveniet, ea voluptatibus? Nihil accusamus impedit delectus magnam sequi natus, cumque, aliquam harum hic voluptates id?
                   Obcaecati asperiores quos dolore placeat ducimus accusantium voluptate, ipsa labore consequatur saepe a repellendus sed officia veritatis aperiam quasi quaerat perferendis illo suscipit sequi sunt tempora quod cupiditate. Provident, autem?
                   Numquam laboriosam consequuntur aperiam. Culpa dignissimos quae, placeat amet accusantium fugiat necessitatibus? Necessitatibus deleniti repudiandae unde nam veritatis modi sunt explicabo sequi, reprehenderit excepturi laboriosam maxime sit, aut quae reiciendis. </p>
                   <Button name={"Learn More About Us"}></Button> <Button name={"Contact Us Today"}></Button>
                </div>
            </div>
        </section>
    )
}
export default Section1