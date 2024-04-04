'use client';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'react-share';
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa6';

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
      <FacebookShareButton url={socialConfig.config.url} className="button">
        <span className="icon">
          <FaFacebookF />
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
          <FaTwitter />
        </span>
        <span className="text">Twitter</span>
      </TwitterShareButton>
      <LinkedinShareButton
        url={socialConfig.config.url}
        className="button"
        title={`${socialConfig.config.quote} #${socialConfig.config.hashtag}`}
      >
        <span className="icon">
          <FaLinkedin />
        </span>
        <span className="text">LinkedIn</span>
      </LinkedinShareButton>
    </div>
  );
}
