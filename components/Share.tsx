'use client';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'react-share';
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ShareProps {
  socialConfig: {
    config: {
      url: string;
      title: string;
      quote: string;
      hashtag?: string;
    };
  };
}

export function Share({ socialConfig }: ShareProps) {
  return (
    <div className="post-social">
      <FacebookShareButton
        url={socialConfig.config.url}
        className="button"
      >
        <span className="icon">
          <FontAwesomeIcon icon={faFacebookF} />
        </span>
        <span className="text">Facebook</span>
      </FacebookShareButton>
      <TwitterShareButton
        url={socialConfig.config.url}
        className="button"
        title={socialConfig.config.quote}
        // hashtags={[socialConfig.config.hashtag]}
      >
        <span className="icon">
          <FontAwesomeIcon icon={faTwitter} />
        </span>
        <span className="text">Twitter</span>
      </TwitterShareButton>
      <LinkedinShareButton
        url={socialConfig.config.url}
        className="button"
        title={`${socialConfig.config.quote} #${socialConfig.config.hashtag}`}
      >
        <span className="icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </span>
        <span className="text">LinkedIn</span>
      </LinkedinShareButton>
    </div>
  );
}
