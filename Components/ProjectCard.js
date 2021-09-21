import { useState } from "react";
import Image from 'next/image';

export default function ProjectCard(props) {
  const imgPath = props.imgPath;
  const name = props.name;
  const id = props.id;
  const description = props.description;
  const technologies = props.technologies;

  const [isOpened, setOpen] = useState({'class': 'picture', 'text': 'View Full Sketch', 'arrow': 'fal fa-arrow-right'});

  const openPicture = () => {
    if (isOpened.class == "picture") setOpen({'class': "picture opened", 'text': 'Exit Full Sketch', 'arrow': 'fal fa-arrow-left'});
    else setOpen({'class': 'picture', 'text': 'View Full Sketch', 'arrow': 'fal fa-arrow-right'});
  };

  return (
    <div className="projectCard">
      <div className="content">
        <div className="text">
          <h4>
            {id} / {name}
          </h4>
          <p>{description}</p>

          <p className="technologies">{technologies}</p>
          <div className="buttons">
            <button type="button" onClick={() => openPicture()}>
              {isOpened.text} <i className={isOpened.arrow}></i>
            </button>
          </div>
        </div>
        <div className={isOpened.class}>
          <Image src={imgPath} layout='fill' objectFit="cover" alt={name}/>
        </div>
      </div>
    </div>
  );
}
