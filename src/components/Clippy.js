import { Popover, ArrowContainer } from "react-tiny-popover";
import { useEffect, useState } from "react";
import { delay } from "../helpers";

const Clippy = ({ handlePlayPause, audioIsPlaying }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [modalHasOpened, setModalHasOpened] = useState(false);

  // Open the clippy popup after a delay of 3 seconds
  useEffect(() => {
    if (!modalHasOpened && !audioIsPlaying) {
      delay(3000).then(() => {
        // if the modal hasn't been opened since the delay started, open it up
        if (!modalHasOpened) {
          setModalHasOpened(true);
          setIsPopoverOpen(true);
        }
      });
    }
  });

  const handlePopover = () => {
    if (!modalHasOpened) {
      setModalHasOpened(true);
    }
    setIsPopoverOpen(!isPopoverOpen);
  };

  return (
    <>
      <Popover
        isOpen={isPopoverOpen}
        positions={["top", "bottom", "left", "right"]}
        onClickOutside={() => setIsPopoverOpen(false)}
        content={({
          position,
          childRect,
          popoverRect,
          handlePlayPause,
          setIsPopoverOpen,
        }) => (
          <ArrowContainer
            position={position}
            childRect={childRect}
            popoverRect={popoverRect}
            arrowColor={"blue"}
            arrowSize={10}
            arrowStyle={{ opacity: 0.7 }}
            className="popover-arrow-container clippy-popup "
            arrowClassName="clippy-popup-arrow"
          >
            <div onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
              Would you like some tunes while you browse the weather?
              <div>
                <button
                  onClick={() => {
                    handlePlayPause();
                    setIsPopoverOpen(!isPopoverOpen);
                  }}
                >
                  Yes
                </button>{" "}
                <button onClick={() => setIsPopoverOpen(!isPopoverOpen)}>
                  No
                </button>
              </div>
            </div>
          </ArrowContainer>
        )}
      >
        <button className="clippy" onClick={() => handlePopover()}>
          <img
            src="https://i.gifer.com/1zfr.gif"
            alt="Microsft's 'Clippy' mascot"
          />
        </button>
      </Popover>
    </>
  );
};

export default Clippy;
