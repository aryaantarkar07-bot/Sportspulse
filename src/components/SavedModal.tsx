import React from 'react';
import { Bookmark, X, Trash2, ArrowRight, Clock } from 'lucide-react';
import { Article } from '../types';

interface SavedModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: Article[];
  onSelectArticle: (article: Article) => void;
  onRemoveBookmark: (article: Article) => void;
  onClearAll: () => void;
}

export const SavedModal: React.FC<SavedModalProps> = ({
  isOpen,
  onClose,
  savedArticles,
  onSelectArticle,
  onRemoveBookmark,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-white h-full overflow-y-auto p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-200">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-stone-200 mb-6">
            <div className="flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-rose-600 fill-current" />
              <div>
                <h3 className="font-bold text-lg text-stone-900 font-sans">
                  SAVED STORIES
                </h3>
                <p className="text-xs text-stone-400 font-mono">
                  {savedArticles.length} {savedArticles.length === 1 ? 'article' : 'articles'} in your reading list
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded text-stone-400 hover:text-stone-900"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          {savedArticles.length === 0 ? (
            <div className="py-20 text-center text-stone-400">
              <Bookmark className="w-10 h-10 mx-auto mb-3 opacity-30 text-stone-400" />
              <p className="font-editorial text-lg text-stone-700 mb-1">Your reading list is empty</p>
              <p className="text-xs max-w-xs mx-auto text-stone-500">
                Click the bookmark icon on any magazine story to save it for offline or later reading.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {savedArticles.map((art) => (
                <div
                  key={art.id}
                  className="p-4 rounded-xl border border-stone-200 hover:border-stone-300 bg-stone-50/60 transition-all group flex flex-col justify-between"
                >
                  <div
                    onClick={() => {
                      onSelectArticle(art);
                      onClose();
                    }}
                    className="cursor-pointer"
                  >
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-rose-600 mb-1 font-sans">
                      {art.category}
                    </div>
                    <h4 className="font-editorial text-base font-bold text-stone-900 group-hover:text-rose-600 transition-colors leading-snug mb-2">
                      {art.title}
                    </h4>
                    <p className="text-xs text-stone-600 line-clamp-2 mb-3 font-body">
                      {art.subtitle}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-stone-200/60 flex items-center justify-between text-[11px] font-mono text-stone-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{art.readTime}</span>
                    </span>
                    <button
                      onClick={() => onRemoveBookmark(art)}
                      className="text-stone-400 hover:text-rose-600 p-1 transition-colors"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {savedArticles.length > 0 && (
          <div className="pt-6 border-t border-stone-200">
            <button
              onClick={onClearAll}
              className="w-full py-2.5 text-xs font-semibold text-stone-600 hover:text-rose-600 border border-stone-200 hover:border-stone-300 rounded-lg transition-colors"
            >
              Clear Reading List
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
